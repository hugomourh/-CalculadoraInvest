
'use client'
import "bootstrap/dist/css/bootstrap.min.css"

import { useState} from "react";



export default function Calculadora() {

  const [aporteInicial, setAporteInicial] = useState(300);
  const [aporteMensal, setAporteMensal] = useState(300);
  const [taxaAnual, setTaxaAnual] = useState(10);
  const [meses, setMeses] = useState(10);
  const [temImposto, settemImposto] = useState ("Nao")
  const [valorInvestido, setValorInvestido] = useState ('')
  const [ValorImposto, SetValorImposto] = useState ('')
  const [jurosAcumulado, setjurosAcumulado] = useState ('')
  const [valorLiquido, setvalorLiquido] = useState ('')
  const [Resultado, setResultado] = useState(null);
 

 

  function calcularMontante() {
    const taxaMensal = taxaAnual / 12 / 100;
    let montante = aporteInicial * Math.pow(1 + taxaMensal, meses);

    for (let i = 1; i <= meses; i++) {
      montante += aporteMensal * Math.pow(1 + taxaMensal, meses - i);
    }

  let imposto = 0;
  let aliquota = 0;

  if (temImposto === "Sim") {
    if (meses <= 6) aliquota = 0;
    else if (meses <= 12) aliquota = 20.0;
    else if (meses <= 24) aliquota = 17.5;
    else aliquota = 15.0;

    const valorInvestido = Number(aporteInicial) + Number(aporteMensal) * meses;
    const ganhos = montante - valorInvestido;
    imposto = ganhos * (aliquota / 100);

    SetValorImposto(imposto.toFixed(2));
  } else {
    SetValorImposto("Isento");
  }


  const VLinvestido = aporteInicial + aporteMensal * meses;
  const JurosACM = montante - VLinvestido;
  const ValorLQ = montante - imposto;
  


  setvalorLiquido(ValorLQ.toFixed(2))
  setResultado(montante.toFixed(2));
  setjurosAcumulado (JurosACM.toFixed(2))
  setValorInvestido (VLinvestido.toFixed(2))
 

}



  return (
  <>
  
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
<table className="table table-striped tabela" >
<thead>
<tr>
  <th>Valor investido</th>
  <th>{valorInvestido}</th>
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.min.js" integrity="sha384-VQqxDN0EQCkWoxt/0vsQvZswzTHUVOImccYmSyhJTp7kGtPed0Qcx8rK9h9YEgx+" crossorigin="anonymous"></script>
  </>
  );
}

