import { NavbarDark, Sidebar, Social, PartNer, Footer } from '../components';
import '../globals.css'


export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main >

      <NavbarDark />
      <Sidebar />
      <Social />

      {children}
      <h4 className="text-center  font-bold text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
        <br />
        Tecnologías que usamos
        <br />
      </h4>
      <br />
      <PartNer />
      <Footer />
    </main>
  );
}