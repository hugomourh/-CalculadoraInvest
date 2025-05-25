"use client"

import "bootstrap/dist/css/bootstrap.min.css"
import Investidores from "./Componentes/Investidores/index.jsx";
import Calculadora from "./Componentes/Calculadora/index.jsx";
import { useState } from "react";



   export default function Home() {
  const [alterarTema, setAlterarTema] = useState(false);

  function trocarTemaPagina() {
    setAlterarTema(!alterarTema);
  }
   
  return (
    <>
      <Investidores trocarTemaPagina={trocarTemaPagina} alterarTema={alterarTema} />
      <Calculadora alterarTema={alterarTema} />
    </>
  


  


  );
}
