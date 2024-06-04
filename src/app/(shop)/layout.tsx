
import { Footer, NavbarDark, PartNer, Sidebar, Social, } from '../components';
import '../globals.css'

import head from 'next/head';


export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
        <head>
        <title>Mi página de inicio</title>
        <meta name="description" content="Puentech es una empresa de desarrollo de software, aplicaciones móviles, aplicaciones web, ecommerce, devops, base de datos, diseño web, diseño de tiendas online, con la mejor tecnología y experiencia de usuario." />
        <meta name="keywords" content="Diseño web, ecommerce, app, software, desarrollo, devops, base de datos, sql, mysql, postgresql, sqlserver, react, angular,android,ios,java,nodejs,express,typescript,javascript,html,css,bootstrap,tailwind,materialdesign,git,github,gitlab,bitbucket,azure,aws" />
        <meta name="author" content="Puentes Digitales" />
        <meta property="og:title" content="Home - Puentech Digitales" />
        <meta property="og:description" content="Puentech es una empresa de desarrollo de software, aplicaciones móviles, aplicaciones web, ecommerce, devops, base de datos, diseño web, diseño de tiendas online, con la mejor tecnología y experiencia de usuario." />
        <meta property="og:image" content="/assets/img/sitio-web.webp" />
        <meta property="og:url" content="https://www.puentesdigitales.com.ar" />
       
      </head>
      <NavbarDark />
      <Sidebar />
      <Social />
      {children}
      <h4 className="text-center  font-bold text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
        Tecnologías
      </h4>
      <br />


      <PartNer />
      <Footer />
    </main>
  );
}