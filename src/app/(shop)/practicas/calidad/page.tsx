import { TimelineProject, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { Metadata } from 'next'
import { IoIosCheckmarkCircleOutline, IoIosMenu } from 'react-icons/io'
import { CgMenuGridO } from "react-icons/cg";



export const metadata: Metadata = {
  keywords: 'Innovacion,proyecto, desarrollo evolutivo,web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de ',
  title: "Prácticas | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",
}


export default function NuestrasPracticas() {
  return (
    <>
      <div className='titleheader'>
        <Title title="Prácticas" subtitle="Puentech" />
      </div>
      <BannerHeader
        title="Prácticas"
        descripcion="Puentech"
        video='/assets/videos/equipo.mp4' />

      <div className="flex min-h-screen flex-col items-center justify-between p-2 ">
        <div className="flex justify-between  mx-auto  sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-[1500px]">

            <section >
              <div className="">
              <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
              CALIDAD
                </h1>
                <div className="w-full mb-4">
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap">

                  <div className="w-5/6 sm:w-1/2 p-6">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Aseguramiento de calidad de los componentes que conforman una solución tecnológica.
                    </h3>
                    <p className="text-gray-600 mb-8">
                    La gran velocidad de desarrollo y la necesidad de lograr entregables con rapidez, marcan la importancia incorporar un proceso de calidad robusto en el proceso de desarrollo.
                    <br />
                    Logramos asegurar la calidad necesaria de los componentes desarrollados mediante la formación de procedimientos de prueba, tanto automáticas como manuales, y un proceso formal de gestión y ejecución de ciclos de prueba. </p>
                  </div>


                  <div className="w-full sm:w-1/2 p-6">
                    <svg className="w-full sm:h-64 mx-auto" viewBox="0 0 1177 598.5" xmlns="http://www.w3.org/2000/svg">
                      <title className="text-center"> INNOVACIÓN</title>

                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M274.63,501l-6.29-3.91c-.6-.37-1.19-.77-1.79-1.15a59.86,59.86,0,0,0,6.05-116.62l.31,24.66-13.55-26.83h-.17a59.87,59.87,0,0,0-62.58,57c-.06,1.15,0,2.27,0,3.4-4.71-5.38-9-11.15-11.83-17.47-5.73-12.79-5.84-27.28-5.39-44.9.9-34.9,2.41-70.08,4.37-105.14a59.85,59.85,0,0,0,53.16-56.64c.08-1.83,0-3.63,0-5.43,0-.45,0-.89-.07-1.34-.12-1.74-.28-3.46-.55-5.16,0-.28-.1-.55-.15-.82-.24-1.44-.54-2.86-.88-4.26-.13-.53-.26-1-.4-1.57-.42-1.53-.88-3-1.42-4.52-.18-.49-.39-1-.58-1.46-.42-1.09-.88-2.17-1.37-3.23-.26-.56-.51-1.12-.78-1.67-.08-.14-.13-.29-.21-.43l0,0a59.84,59.84,0,0,0-70.28-30.36l.4,32.1-13.4-26.52a59.57,59.57,0,0,0-28.55,64.51h-.06c.09.43.22.84.32,1.26.19.79.39,1.57.61,2.35.28,1,.6,2,.93,3,.25.74.49,1.47.77,2.2.41,1.06.87,2.09,1.33,3.12.27.6.51,1.22.8,1.81q1.14,2.33,2.48,4.53c.31.52.66,1,1,1.51.64,1,1.28,2,2,2.93.43.59.89,1.16,1.34,1.73.66.83,1.33,1.65,2,2.44.49.57,1,1.12,1.51,1.66.74.78,1.49,1.53,2.27,2.26.52.49,1,1,1.57,1.46.88.79,1.8,1.53,2.73,2.26.47.37.93.75,1.41,1.11,1.42,1,2.88,2,4.39,3,.28.17.59.31.87.48,1.27.74,2.55,1.45,3.87,2.09.57.28,1.15.53,1.73.79,1.08.48,2.17.95,3.29,1.38l2,.7c1.1.37,2.22.72,3.35,1,.66.18,1.33.37,2,.53,1.22.29,2.47.53,3.73.75l.24.05q-1.23,22.19-2.2,44.39a59.83,59.83,0,0,0-83.07-26l10.58,29-21.77-20.9a59.66,59.66,0,0,0-19.34,41.34A58.5,58.5,0,0,0,52.8,354a59.84,59.84,0,0,0,110.06,16.3c0,1.5-.1,3-.14,4.51-.4,15.54-.9,34.88,6.85,52.15,5.25,11.7,13.69,21.21,22,29.73,5.43,5.54,11.06,10.91,16.83,16.1a60.09,60.09,0,0,0,21.62,18c9.48,7.3,19.3,14.17,29.45,20.51l6.34,3.94c5.7,3.53,11.54,7.16,17.26,10.93-1-.1-2-.21-3-.26a59.89,59.89,0,0,0-58.94,39l37.4,30.43-41.14-9.54a59.89,59.89,0,0,0,85.82,53.92l-2.78,3.45q-2.76,3.43-5.45,6.82c-24.34,30.83-31.11,60.09-19.06,82.4l14.66-7.91c-11.73-21.72,5.91-49.52,17.47-64.16q2.64-3.33,5.36-6.7c15.55-19.32,33.17-41.22,32.74-68.08C345.52,545,306.21,520.6,274.63,501Z"
                        fill="#f2f2f2"
                      />
                      <ellipse cx="588.5" cy="577.5" rx="588.5" ry="21" fill="#3f3d56" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M119.9,721.42c-3-5.51.4-12.27,4.29-17.18s8.61-10,8.51-16.29c-.15-9-9.7-14.31-17.33-19.09a84,84,0,0,1-15.56-12.51A22.8,22.8,0,0,1,95,650c-1.58-3.52-1.54-7.52-1.44-11.37q.51-19.26,1.91-38.49"
                        fill="none"
                        stroke="#3f3d56"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      />
                      <path transform="translate(-11.5 -150.75)" d="M81,599.39a14,14,0,0,1,7-11.5l3.14,6.22-.1-7.53a14.22,14.22,0,0,1,4.63-.56A14,14,0,1,1,81,599.39Z" fill="#57b894" />
                      <path transform="translate(-11.5 -150.75)" d="M106,694.38a14,14,0,1,0-.68-11.3l8.77,7.13L104.46,688A14,14,0,0,0,106,694.38Z" fill="#57b894" />
                      <path transform="translate(-11.5 -150.75)" d="M113,667.13a14,14,0,0,0,4.45-27.53l.08,5.78-3.18-6.29h0a14,14,0,0,0-14.67,13.36,13.84,13.84,0,0,0,.6,4.79A14,14,0,0,0,113,667.13Z" fill="#57b894" />
                      <path transform="translate(-11.5 -150.75)" d="M78.88,644.46a14,14,0,1,0-6.21-26.27l2.48,6.8-5.1-4.9a14,14,0,0,0-4.53,9.69,13.79,13.79,0,0,0,.35,3.87A14,14,0,0,0,78.88,644.46Z" fill="#57b894" />
                      <path transform="translate(-11.5 -150.75)" d="m82.88 603.13c3.24 0.35 6.39 1.36 9.64 1.56s6.82-0.57 8.88-3.1c1.1-1.36 1.66-3.08 2.59-4.57a10 10 0 0 1 3.54 -3.33 14 14 0 1 1 -26.24 9.31q0.79 0 1.59 0.13z" opacity=".1" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M78.88,644.46a14,14,0,0,0,13.35-20,10.37,10.37,0,0,0-2.82,2.82c-1,1.51-1.61,3.26-2.78,4.64-2.19,2.57-5.92,3.41-9.31,3.26s-6.66-1.12-10-1.43c-.47,0-.94-.07-1.42-.08A14,14,0,0,0,78.88,644.46Z"
                        opacity=".1"
                      />
                      <path transform="translate(-11.5 -150.75)" d="M113,667.13a14,14,0,0,0,13.46-19.76,11.48,11.48,0,0,0-3,2.85c-1.09,1.54-1.77,3.32-3,4.74-2.37,2.63-6.35,3.56-9.93,3.48s-6.83-.93-10.28-1.2A14,14,0,0,0,113,667.13Z" opacity=".1" />
                      <path transform="translate(-11.5 -150.75)" d="M106,694.38a14,14,0,0,0,25.59-11.45,13.84,13.84,0,0,0-3.08,2.75c-1.34,1.62-2.22,3.47-3.76,5-2.87,2.82-7.5,4-11.63,4.09A60,60,0,0,1,106,694.38Z" opacity=".1" />
                      <path transform="translate(-11.5 -150.75)" d="m141.07 715.07s-11.08-0.34-14.42-2.72-17-5.21-17.86-1.4-16.65 19-4.15 19.06 29.06-1.94 32.4-4 4.03-10.94 4.03-10.94z" fill="#656380" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m104.42 728.69c12.51 0.1 29.06-2 32.39-4 2.54-1.55 3.55-7.09 3.89-9.65h0.37s-0.7 8.94-4 11-19.89 4.07-32.4 4c-3.61 0-4.85-1.31-4.78-3.21 0.47 1.17 1.84 1.83 4.53 1.86z"
                        opacity=".2"
                      />
                      <rect x="171.5" y="111.25" width="834" height="456" rx="20.42" fill="#f2f2f2" />
                      <path d="m172 133.75h268v434h-247.58a20.42 20.42 0 0 1 -20.42 -20.42v-413.58z" fill="#ff6347" />
                      <path transform="translate(-11.5 -150.75)" d="M1017,282.42V294H183V282.42A20.42,20.42,0,0,1,203.42,262H996.58A20.42,20.42,0,0,1,1017,282.42Z" fill="#3f3d56" />
                      <circle cx="193" cy="127.75" r="6" fill="#ff6347" />
                      <circle cx="208" cy="127.75" r="6" fill="#ff6347" />
                      <circle cx="223" cy="127.75" r="6" fill="#ff6347" />
                      <path transform="translate(-11.5 -150.75)" d="M387.5,490A66.5,66.5,0,1,1,321,423.5,66.47,66.47,0,0,1,387.5,490Z" fill="none" stroke="#f2f2f2" strokeMiterlimit="10" strokeWidth="2" />
                      <path transform="translate(-11.5 -150.75)" d="M325.38,467.23l8.3,13,35.53,55.59a66.5,66.5,0,0,1-103.32-8.57l43.54-84.94.91,1.43" fill="none" stroke="#f2f2f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M385.31,507a66.46,66.46,0,0,1-16.1,28.82l-35.53-55.59,15.69-24.78a.66.66,0,0,1,1.1,0C353.76,460.32,371,486,385.31,507Z"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <path transform="translate(-11.5 -150.75)" d="M337.5,452.5a15,15,0,0,1-12.12,14.73l-15-23.51a15,15,0,0,1,27.16,8.78Z" fill="none" stroke="#f2f2f2" strokeMiterlimit="10" strokeWidth="2" />
                      <path transform="translate(-11.5 -150.75)" d="m347.5 481.5" fill="none" stroke="#f2f2f2" strokeMiterlimit="10" strokeWidth="2" />
                      <path transform="translate(-11.5 -150.75)" d="m333.5 480.5" fill="none" stroke="#f2f2f2" strokeMiterlimit="10" strokeWidth="2" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M563.51,413.13c-.35,0-1.51,0-1.83,0l-6.61.17a.19.19,0,0,1-.17-.09L545,398.42a1.61,1.61,0,0,0-1.37-.75h-2.41c-.57,0-.77.57-.56,1.1l5.09,14.52a.2.2,0,0,1-.18.28l-12.45.18a.81.81,0,0,1-.67-.31l-3.77-4.58a1.59,1.59,0,0,0-1.28-.62h-1.71a.4.4,0,0,0-.38.54l2,7a1.68,1.68,0,0,1,0,1.21l-2,7a.39.39,0,0,0,.38.53h1.7a1.62,1.62,0,0,0,1.28-.62l3.84-4.64a.82.82,0,0,1,.67-.32l12.38.27a.21.21,0,0,1,.18.28L540.65,434c-.21.53,0,1.1.56,1.1h2.41a1.61,1.61,0,0,0,1.37-.76l9.91-14.81a.2.2,0,0,1,.17-.09l6.61.17c.33,0,1.48,0,1.83,0,4.5,0,7.35-1.45,7.35-3.25S568,413.13,563.51,413.13Z"
                        fill="#3f3d56"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M548.32,532.86a.41.41,0,0,0-.51,0l-15.87,12.7a.42.42,0,0,0-.15.31v23.4a.21.21,0,0,0,.2.21h11a.21.21,0,0,0,.2-.21V555a.21.21,0,0,1,.21-.2h9.36a.2.2,0,0,1,.2.2v14.24a.21.21,0,0,0,.2.21h11a.21.21,0,0,0,.2-.21v-23.4a.4.4,0,0,0-.15-.31Z"
                        fill="#3f3d56"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M568.69,543.05l-19.23-15.41a2.23,2.23,0,0,0-1.39-.48,2.26,2.26,0,0,0-1.4.48l-8.37,6.81v-4.29a.2.2,0,0,0-.2-.21H532a.2.2,0,0,0-.2.21v9.38l-4.34,3.57a1.41,1.41,0,0,0-.54,1,1.45,1.45,0,0,0,.41,1.09,1.41,1.41,0,0,0,1,.42,1.47,1.47,0,0,0,.9-.31l18.7-15.06a.22.22,0,0,1,.14,0,.24.24,0,0,1,.13,0l18.71,15a1.44,1.44,0,0,0,2.33-1.19,1.45,1.45,0,0,0-.55-1Z"
                        fill="#3f3d56"
                      />
                      <rect x="604" y="260.14" width="347" height="11" rx="1.24" fill="#ff6347" opacity=".3" />
                      <rect x="604" y="392.07" width="347" height="11" rx="1.24" fill="#ff6347" opacity=".3" />
                      <rect x="878" y="279.75" width="73" height="25" rx="1.24" fill="#ff6347" />
                      <rect x="878" y="411.75" width="73" height="25" rx="1.24" fill="#ff6347" />
                      <path transform="translate(-11.5 -150.75)" d="m978.18 606.93l-1.73 2s-21.05 2-20.2 5.39 25.35-4.55 25.35-4.55z" fill="#ffc1c7" />
                      <path transform="translate(-11.5 -150.75)" d="m1016.3 605.22s-22.5 8-34.74 4.56l5.69 11.39s29.05-0.86 34.18-6-5.13-9.95-5.13-9.95z" fill="#ff6584" />
                      <path transform="translate(-11.5 -150.75)" d="m1016.3 605.22s-22.5 8-34.74 4.56l5.69 11.39s29.05-0.86 34.18-6-5.13-9.95-5.13-9.95z" opacity=".1" />
                      <circle cx="989.6" cy="378.29" r="15.09" fill="#ffc1c7" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1014 543.21a11.85 11.85 0 0 0 2 2.71 24.62 24.62 0 0 0 7.28 5.44 246.74 246.74 0 0 1 -25.93 3.86c0.92-3.24-0.29-6.7-1.91-9.64s-3.7-5.69-4.72-8.9l10.2 0.28c1.85 0 3.71 0.1 5.56 0 1.39-0.07 3.69-0.9 5-0.59 2.64 0.63 1.3 4.42 2.52 6.84z"
                        fill="#ffc1c7"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M1048.24,614.05l8.54,10.25S1071,657.62,1040,661s-54.11-2.57-54.11-2.57-12.53-6-12.82-1.42-1.42,17.37-8.26,29.9l-6,13.67a8.84,8.84,0,0,0-2.27,7.41c.85,4.27-19.09,5.69-18.8,0,0,0,2.85-4.84,2.85-7.69s4.55-9.68,4.55-9.68l8.26-41s-.57-21.08,18.8-17.09,47-.86,47-.86l6.26-21.92Z"
                        fill="#575a89"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M1048.24,614.05l8.54,10.25S1071,657.62,1040,661s-54.11-2.57-54.11-2.57-12.53-6-12.82-1.42-1.42,17.37-8.26,29.9l-6,13.67a8.84,8.84,0,0,0-2.27,7.41c.85,4.27-19.09,5.69-18.8,0,0,0,2.85-4.84,2.85-7.69s4.55-9.68,4.55-9.68l8.26-41s-.57-21.08,18.8-17.09,47-.86,47-.86l6.26-21.92Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1086.8 648.79v8.55a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-7.12a1 1 0 0 0 -1 -1h-18.82a1 1 0 0 0 -1 1v7.12a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-8.55a1 1 0 0 1 1 -1h22.78a1 1 0 0 1 1.04 1z"
                        fill="#3c354c"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M999.16,721.79a5.79,5.79,0,0,0,5.14,6l134.88,3.33a.41.41,0,0,0,.32-.11h0a.31.31,0,0,0,.11-.2l1.79-8.32a6.38,6.38,0,0,0,.13-1.44l-2.88-60.37a5.65,5.65,0,0,0-.84-2.8l-2-3.36a1.12,1.12,0,0,0-.25-.28,1,1,0,0,0-.61-.2l-127,1.89a5.8,5.8,0,0,0-5.71,5.53Z"
                        fill="#3f3d56"
                      />
                      <path transform="translate(-11.5 -150.75)" d="M1135.53,654.27l4,76.78h0l.11-.2,1.79-8.32a6.38,6.38,0,0,0,.13-1.44l-2.88-60.37a5.65,5.65,0,0,0-.84-2.8l-2-3.36A1.12,1.12,0,0,0,1135.53,654.27Z" opacity=".1" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1016.2 613.3s26.06-9.79 40.58 11c0 0 3.7 32.18-11.11 33.6s-34.17 1.14-38.73-3.7-33.32-18.51-33.32-18.51-14.32-7.3-17.12 2.19-3.1 11.77-3.1 11.77-14.81 10.82-20.79 12.81c0 0-4 5.7-6.26 5.7s-16.23 3.13-14.81-7.41l23.07-21.07 23.06-22.5s6.55-9.68 23.36-4.56a346.13 346.13 0 0 0 33.89 8.26z"
                        fill="#575a89"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M955.68,707.46s5.41,13.67.86,15.38-14.24.57-14.24.57-11.4-1.43-14.24-1.14-14.53-2-12.82-6.55,10.54-3.42,10.54-3.42l8-3.7s.86-2.85,2.85-1.71S944.29,712.3,955.68,707.46Z"
                        fill="#cbceda"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m926.06 667s6 13.38-3.7 12.24-17.09-3.13-19.93-3.41-10.49-2.92-9.3-8.19a4.52 4.52 0 0 0 0.08 -1c0-0.71 1-2.09 8.65-1.88 0 0 5.69 0 8-4-0.03-0.01 8.51 10.81 16.2 6.24z"
                        fill="#cbceda"
                      />
                      <path transform="translate(-11.5 -150.75)" d="m990.71 553.1s20.5-12.81 37.59 0 28.48 71.2 28.48 71.2l-39.59-8.83s-1.7-6.83-4-8-2.57-6-2.57-6-12.24-3.7-11.39-17.94-8.52-30.43-8.52-30.43z" fill="#ff6584" />
                      <path transform="translate(-11.5 -150.75)" d="m1001.2 553.67h-10.54s-6.27 7.12-7.12 25.06l-3.42 14.27s-7.12 17.09-2.85 19.94 12.54 2.56 14.24-3.13 13.44-38.76 13.44-38.76z" fill="#ff6584" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M998.23,509.4A15.27,15.27,0,0,1,1014,512c5.47,4.88,6.57,12.85,8,20s4.17,15.21,11,18a28.35,28.35,0,0,1-9.19-.27l10.25,9.19-17.27-5.63c-5.42-1.77-11.11-3.56-16.72-2.56-9.3,1.65-15.78,10.4-24.71,13.47l1-4.85-6,0a11.75,11.75,0,0,0,3.43-4,3.27,3.27,0,0,0-2.29-1.2c-2.5-15.59,6.76-31,18.81-41.17,2.38-2,5-3.92,8.06-4.42s6.64.87,7.71,3.78"
                        fill="#3c354c"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                  <div className="w-full sm:w-1/2 p-6 mt-6">                  
                  <img className="w-full sm:h-90 mx-auto" src="/assets/img/software-testing.png" />
                  </div>

                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">                        
                      <CgMenuGridO   className="inline-block w-8 h-8 -mt-2 mr-1 text-black" />                       
                      PRUEBAS AUTOMÁTICAS
                      </h3>
                      <p className="text-gray-600 mb-8">
                      Desarrollo y ejecución de pruebas de componentes de software sin intervención humana aplicable principalmente a tareas y procedimientos, que se ejecutan de manera repetitiva y con alta frecuencia.
                        <br />
                        <br />
                        
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Interfaces Web & Mobile
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Servicios HTTP REST y SOAP
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Lectura de BD y peticiones a servicios
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Registro automático de casos exitosos o fallidos
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Generación de reporte de ciclo de prueba
                      </p>
                    </div>


                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      <CgMenuGridO   className="inline-block w-8 h-8 -mt-2 mr-1 text-black" />                       
                      PRUEBAS MANUALES
                      </h3>
                      <p className="text-gray-600 mb-8">
                      Antes de dar inicio a la construcción del proyecto se deben definir los lineamientos

                        <br />
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Interfaces Web & Mobile
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Servicios HTTP REST y SOAP
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Lectura de BD y peticiones a servicios
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Registro automático de casos exitosos o fallidos
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Generación de reporte de ciclo de prueba

                      </p>
                    </div>

                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      <CgMenuGridO   className="inline-block w-8 h-8 -mt-2 mr-1 text-black" />                       
                      PRUEBAS DE PERFORMANCE
                      </h3>
                      <p className="text-gray-600 mb-8">
                      Definición y ejecución de casos de prueba con alta concurrencia de usuarios simulando escenarios de alta demanda por parte de los usuarios finales y aplicaciones de terceros.
                        <br />
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Escenarios de prueba con múltiples usuarios y operaciones
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Desarrollo de scripts y procedimientos de prueba
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Monitoreo de recursos hardware y software
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Análisis de resultados obtenidos
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Generación de reportes de pruebas
                      </p>
                    </div>

                  


                  </div>
                </div>
              </div>
            </section>

         

          
          
           



          </article>
        </div>

      </div>
    </>
  )
}