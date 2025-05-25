
'use client'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
import { useState} from "react";





  

export default function Calculadora(props) {

    useEffect(() => {
        if (typeof window !== "undefined") {
          import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
})


  const [aporteInicial, setAporteInicial] = useState("");
  const [aporteMensal, setAporteMensal] = useState("");
  const [taxaAnual, setTaxaAnual] = useState("");
  const [meses, setMeses] = useState("");
  const [temImposto, settemImposto] = useState ("Nao")
  const [valorInvestido, setValorInvestido] = useState (null)
  const [ValorImposto, SetValorImposto] = useState (null)
  const [jurosAcumulado, setjurosAcumulado] = useState (null)
  const [valorLiquido, setvalorLiquido] = useState (null)
  const [Resultado, setResultado] = useState(null);
  

 

 

  function calcularMontante() {
  const aporteInicialNum = Number(aporteInicial);
  const aporteMensalNum = Number(aporteMensal);
  const taxaAnualNum = Number(taxaAnual);
  const mesesNum = Number(meses);

  const taxaMensal = taxaAnualNum / 12 / 100;
  let montante = aporteInicialNum * Math.pow(1 + taxaMensal, mesesNum);

  for (let i = 1; i <= mesesNum; i++) {
    montante += aporteMensalNum * Math.pow(1 + taxaMensal, mesesNum - i);
  }

  let imposto = 0;
  let aliquota = 0;

  const VLinvestido = aporteInicialNum + aporteMensalNum * mesesNum;
  const ganhos = montante - VLinvestido;

  if (temImposto === "Sim") {
    if (mesesNum <= 6) aliquota = 0;
    else if (mesesNum <= 12) aliquota = 20.0;
    else if (mesesNum <= 24) aliquota = 17.5;
    else aliquota = 15.0;

    imposto = ganhos * (aliquota / 100);
    SetValorImposto(imposto.toFixed(2));
  } else {
    SetValorImposto("Isento");
  }

  const JurosACM = ganhos;
  const ValorLQ = montante - imposto;

  setvalorLiquido(ValorLQ.toFixed(2));
  setResultado(montante.toFixed(2));
  setjurosAcumulado(JurosACM.toFixed(2));
  setValorInvestido(VLinvestido.toFixed(2));
}



  return (
  <>
<div className={props.alterarTema ?['noite'] :['dia']}>
<div className="container">


  <h1 className="text-center">Simular investimento</h1>

<div className="CorpoForm">
<form className="formulario text-bg-secondary p-3 ">
 

 
<div className="col-md-4">
<label htmlFor="AptInicial" className="form-label">Aporte Inicial:</label>
<input type="number"
value={aporteInicial} 
onChange={(e) => setAporteInicial (e.target.value)}
className="form-control"
required/>

    </div>
  
<div className="col-md-4">
<label htmlFor="AptMensal" className="form-label">Aporte Mensal:</label>
<input type="number"
value={aporteMensal} 
onChange={(e) => setAporteMensal (e.target.value)}
 className="form-control"
 required/>
</div>


<div className="col-md-4">
<label htmlFor="" className="form-label">Taxa de Juros Anual (%):</label>
<input type="number"
value={taxaAnual} 
onChange={(e) => setTaxaAnual (e.target.value)}
className="form-control"
required/>
</div> 

<div className="col-md-4">
<label htmlFor="" className="form-label">Duração em meses:</label>
<input type="number"
value={meses} 
onChange={(e) => setMeses(e.target.value)}
className="form-control"
required/>
</div> 

<p>Deduzir Imposto de Renda?</p>

<div className="form-check">
  <input
  className="form-check-input"
    type="radio"
    value="Sim"
    checked={temImposto === "Sim"}
    onChange={(e) => settemImposto(e.target.value)}
    
  />
  <label htmlFor="Sim">Sim</label>
</div>

<div className="form-check ">
  <input
  className="form-check-input"
    type="radio"
    value="Nao"
    checked={temImposto === "Nao"}
    onChange={(e) => settemImposto(e.target.value)}
    
  />
  <label htmlFor="">Não</label>
</div>


  <div className="botao">
  <button className="btn btn-primary" type="button" onClick={calcularMontante}>Enviar</button>
  </div>

  



    </form>


    </div>


<div className="TamanhoTab">
<table className="table table-dark table-striped-columns tabela" >
<thead>
<tr>
  <th className="corTab">Valor investido</th>
  <th className="corTab">{valorInvestido}</th>
</tr>
</thead>

<tbody>
<tr>
<th>Juros Acumulado</th>
<th>{jurosAcumulado}</th>
</tr>
</tbody>

<tbody>
<tr>
<th>Valor do imposto</th>
<th>{ValorImposto}</th>
</tr>
</tbody>

<tbody>
<tr>
<th>Valor Liquido </th>
<th>{valorLiquido}</th>

</tr>

</tbody>

<tbody>
<tr>
  
  <th>Valor Bruto</th>
  <th>{Resultado}</th>
</tr>
</tbody>




</table>

</div>
</div>
    


    </div>
  </>
  );
}

