
import {   Footer, NavbarDark,  } from '../components';
import '../globals.css'


export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="">
     <NavbarDark/>
        {children}
        <Footer/>
    </main>
  );
}