import React, { ReactNode } from 'react'
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps{
    children:ReactNode;
    navBar:boolean;
    header:boolean;
}

export default function Layout({children,navBar,header}:LayoutProps) {
  return (
    <>
        {header && <Header/>}
        {navBar && <NavBar textoPrincipal='CIDWA' textoPrimerLink='Información' textoSegundoLink='Ayuda' textoTercerLink='Contacto' textoPrimerAccion='Telefonos' textoSegundaAccion='Correos' textoTerceraAccion='Otros'/>}
        {children}
        <Footer/>
    </>
  )
}
