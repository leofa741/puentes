
import { Footer, NavbarDark, PartNer, Sidebar, Social, } from '../components';
import '../globals.css'




export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
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