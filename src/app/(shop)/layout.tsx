
import {   Footer, NavbarDark, Sidebar,  } from '../components';
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
        {children}
        <Footer/>
    </main>
  );
}