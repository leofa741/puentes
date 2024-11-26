import React from 'react'
import './timeline.css'

interface Props {
	start?: string,
	next?: string,
	next2?: string,
	next3?: string,
	next4?: string,
	next5?: string,
	next6?: string,
	next7?: string,
	next8?: string,
	next9?: string,
	next10?: string,
	end?: string,
}



export const TimelineProject_2 = (props: Props) => {
	return (
		<>

			<div className="">
				<article>

					<ul className="timeline">
						<div className="timeline__endured">
							<div className="aside filled " style={{ height: 1050 }}>
								<div className="aside__line filled__line">
									<div className="filled__line__completed" style={{ height: 970 }} >
									</div>
								</div>
							</div>

							<li className="timeline__event is--first-day is--monday is--complete">
								<p className="timeline__event__date">Día 1</p>
								<figure className="dot">
									<span className="ratio svg dot__icon">
										<canvas width="9px" height="9px"></canvas>
										<svg viewBox="0 0 9 9"><use xlinkHref="/src/svg/symbols/symbols.svg#tick"></use></svg>
									</span>
								</figure>
								<h5 className="timeline__event__title">{props.start ? props.start : 'INICIACIÓN'}</h5>
								<h6 className="timeline__event__difference"></h6>
							</li>

							<li className="timeline__event is--weekend">
								<p className="timeline__event__date">Día 2</p>
							</li>
							<li className="timeline__event is--weekend">
								<p className="timeline__event__date">Día 3</p>
							</li>

							<li className="timeline__event is--weekend ">
								<p className="timeline__event__date">Día 4</p>
							</li>

							<li className="timeline__event is--weekend">
								<p className="timeline__event__date">Día 5</p>
							</li>

							<li className="timeline__event is--weekend">
								<p className="timeline__event__date">Día ...</p>
							</li>

							<li className="timeline__event is--weekend">
								<p className="timeline__event__date">Día 9</p>
							</li>

							<li className="timeline__event is--monday is--today is--complete">
								<p className="timeline__event__date">Día 10</p>
								<figure className="dot">
									<span className="ratio svg dot__icon">
										<canvas width="9px" height="9px"></canvas>
										<svg viewBox="0 0 9 9"><use xlinkHref="/src/svg/symbols/symbols.svg#tick"></use></svg>
									</span>
								</figure>
								<h5 className="timeline__event__title">{props.next ? props.next : 'LINEAMIENTOS'}</h5>
								<h6 className="timeline__event__difference"></h6>
							</li>

						</div>
						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 11</p>
						</li>
						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 12</p>
						</li>

						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 13</p>
						</li>

						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 14</p>
						</li>

						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día ...</p>
						</li>

						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 29</p>
						</li>

						<li className="timeline__event is--monday is--today is--complete">
							<p className="timeline__event__date">Día 30</p>
							<figure className="dot">
							</figure>
							<h5 className="timeline__event__title">{props.next2 ? props.next2 : 'PRODUCUCTO VIABLE'}</h5>
							<h6 className="timeline__event__difference"></h6>

						</li>

						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 31</p>
						</li>

						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día ..</p>
						</li>

						<li className="timeline__event is--monday is--today is--complete">
							<p className="timeline__event__date">Día 39</p>
							<figure className="dot">
							</figure>

							<h5 className="timeline__event__title">{props.next3 ? props.next3 : 'DESARROLLO EVOLUTIVO'}</h5>

							<h6 className="timeline__event__difference"></h6>

						</li>

						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día 40</p>

						</li>

						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día 41</p>

						</li>

						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día 42</p>

						</li>

						<li className="timeline__event is--monday is--today is--complete">
							<p className="timeline__event__date">Día 43</p>
							<figure className="dot">
							</figure>
							<h5 className="timeline__event__title">{props.next4 ? props.next4 : 'DESARROLLO EVOLUTIVO'}</h5>
							<h6 className="timeline__event__difference"></h6>
						</li>

						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 44</p>
						</li>
						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 45</p>
						</li>
						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día ...</p>
						</li>
						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 56</p>
						</li>
						<li className="timeline__event is--monday is--today is--complete ">
							<p className="timeline__event__date">Día 57</p>
							<figure className="dot">
							</figure>
							<h5 className="timeline__event__title">{props.next5 ? props.next5 : 'PLATAFORMA '}</h5>
						</li>
						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 58</p>
						</li>
						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 59</p>
						</li>
						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día ...</p>
						</li>
						<li className="timeline__event is--weekend">
							<p className="timeline__event__date">Día 68</p>
						</li>
						<li className="timeline__event is--monday is--today is--complete ">
							<p className="timeline__event__date">Día 69</p>
							<figure className="dot">
							</figure>
							<h5 className="timeline__event__title">{props.next6 ? props.next6 : 'ETAPAS '}</h5>
						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día 70</p>

						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día 71</p>

						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día ...</p>

						</li>
						<li className="timeline__event is--monday is--today is--complete ">

							<p className="timeline__event__date">Día 83</p>
							<figure className="dot">
							</figure>
							<h5 className="timeline__event__title">{props.next7 ? props.next7 : 'ESTRATEGIA DE INTEGRACIÓN'}</h5>

						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día 84</p>

						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día ...</p>

						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día 90</p>

						</li>
						<li className="timeline__event is--monday is--today is--complete ">

							<p className="timeline__event__date">Día 91</p>
							<figure className="dot">
							</figure>
							<h5 className="timeline__event__title">{props.next8 ? props.next8 : 'CONSTRUCCIÓN DE ARQUITECTURA'}</h5>


						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día 92</p>

						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día ...</p>

						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día 102</p>

						</li>
						<li className="timeline__event is--monday is--today is--complete ">

							<p className="timeline__event__date">Día 103</p>
							<figure className="dot">
							</figure>
							<h5 className="timeline__event__title">{props.next9 ? props.next9 : 'INTEGRACIÓN DE SISTEMAS'}</h5>


						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día 104</p>

						</li>
						<li className="timeline__event is--weekend">

							<p className="timeline__event__date">Día ...</p>

						</li>

						<li className="timeline__event is--monday is--today is--complete ">

							<p className="timeline__event__date">Día 113</p>
							<figure className="dot">
							</figure>
							<h5 className="timeline__event__title">{props.next10 ? props.next10 : 'TRANSFERENCIA DE CONOCIMIENTOS'}</h5>


						</li>



						<div className="aside unfilled">
							<div className="aside__line">
							</div>
						</div>

					</ul>

				</article>

				<figure className="scene">

					<div className="scene__shade is--past"></div>
					<div className="scene__shade is--past"></div>
					<div className="scene__shade is--past"></div>
					<div className="scene__shade is--past"></div>
					<div className="scene__shade is--past"></div>
					<div className="scene__shade is--past"></div>
					<div className="scene__shade is--past"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>
					<div className="scene__shade"></div>

				</figure>

			</div>

		</>
	)
}
