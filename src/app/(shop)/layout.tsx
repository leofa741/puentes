
import {   Footer, NavbarDark, Sidebar, Social,  } from '../components';
import '../globals.css'




export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="">
     <NavbarDark/>
     <Sidebar/>
     <Social/>
        {children}
        <Footer/>
    </main>
  );
}