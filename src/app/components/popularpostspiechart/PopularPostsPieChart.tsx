import React, { useEffect, useRef, useState } from 'react';
import EChartsReact from 'echarts-for-react';
import { Select, MenuItem, FormControl, Typography, Stack, Paper, SelectChangeEvent } from '@mui/material';

interface Post {
  id: string;
  title: string;
  likes: number;
  comments: number;
}

interface ChartData {
  value: number;
  name: string;
}

const PopularPostsPieChart: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const [metric, setMetric] = useState('likes'); // Default: 'likes'
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const chartRef = useRef<EChartsReact>(null);

  useEffect(() => {
    // Actualiza los datos del gráfico inicialmente
    updateChartData(metric);

    // Configura la actualización automática
    const intervalId = setInterval(() => {
      updateChartData(metric);
    }, 5000); // Actualiza cada 5 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, [metric, posts]);

  const updateChartData = (metric: string) => {
    const sortedPosts = [...posts]
      .sort((a, b) => Number(b[metric as keyof Post]) - Number(a[metric as keyof Post]))
      .slice(0, 5);
    const formattedData = sortedPosts.map((post) => ({
      value: Number(post[metric as keyof Post]),
      name: post.title,
    }));
    setChartData(formattedData);
    updateChart(formattedData);
  };

  const updateChart = (data: ChartData[]) => {
    const echartsInstance = chartRef.current?.getEchartsInstance();
    if (!echartsInstance) return;
  
    interface TooltipPositionParams {
        contentSize: number[];
    }

    interface TooltipFormatterParams {
        name: string;
        value: number;
        percent: number;
    }

    echartsInstance.setOption({
        tooltip: {
            trigger: 'item',
            formatter: (params: TooltipFormatterParams) => `${params.name}: ${params.value} (${params.percent}%)`,
            position: (point: number[], params: TooltipFormatterParams, dom: HTMLElement, rect: any, size: TooltipPositionParams) => {
                const [x, y] = point;
                const { contentSize } = size;
                const tooltipX = x + 10;
                const tooltipY = y - contentSize[1] / 2;
                return [tooltipX, tooltipY];
            },
        },
        series: [
            {
                name: 'Posts',
                type: 'pie',
                radius: ['40%', '70%'],
                data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    });
  };
  

  const handleMetricChange = (event: SelectChangeEvent<string>) => {
    setMetric(event.target.value as string);
  };

  return (
    <Paper sx={{ py: 2.5, height: 400, width: '100%' }}>
      <Stack alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h6" fontWeight={700}>
          Posts más populares
        </Typography>
        <FormControl
  variant="filled"
  size="small"
  sx={{
    minWidth: 150,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 1,
    '& .MuiSelect-root': {
      padding: '8px 24px 8px 16px',
    },
    '& .MuiSelect-icon': {
      color: 'primary.main',
    },
    '& .MuiFilledInput-root': {
      bgcolor: 'background.default',
      '&:hover': {
        bgcolor: 'action.hover',
      },
      '&:focus-within': {
        bgcolor: 'background.paper',
        boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}`,
      },
    },
  }}
>
  <Select value={metric} onChange={handleMetricChange} displayEmpty>
    <MenuItem value="" disabled>
      Selecciona una métrica
    </MenuItem>
    <MenuItem value="likes">Likes</MenuItem>
    <MenuItem value="comments">Comentarios</MenuItem>
  </Select>
</FormControl>

      </Stack>
      <EChartsReact
        ref={chartRef}
        style={{ height: 300 }}
        option={{
          series: [
            {
              type: 'pie',
              radius: ['40%', '70%'],
              data: chartData,
            },
          ],
        }}
      />
    </Paper>
  );
};

export default PopularPostsPieChart;
