import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import { useEffect } from "react";


export default function Investimento() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <>


    




      <div className="container">
        <div className="Page_Topo">
          <h1>Zzz Investimentos</h1>
           
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mais Informações
            </button>
            <ul className="dropdown-menu">
              <li><Link href="#">Suporte</Link></li>
              <li><Link href="#">Denúncia</Link></li>
              <li><Link href="#">Entrar em Contato</Link></li>
              <li><Link href="#">Calculadora</Link></li>
              <li><Link href="#">Investidores</Link></li>
              
            </ul>
          </div>
        </div>
        <hr />
              <div className="alert alert-danger d-flex align-items-center alert-dismissible fade show Alerta" role="alert">
          Essa página é voltada apenas para fins didáticos. Se tiver interesse em investimentos, recomendo que procure um especialista.<br />
          Mas a calculadora funciona perfeitamente
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <div>
          <h1 className="text-center">Principais Investidores do Mundo</h1>
        </div>

        {/* Investidores */}
        <div className="InvestPage">
          <h3>Benjamin Graham</h3>
          <p>Sendo um investidor muito eficaz no que fazia, conseguiu tornar-se um sócio da empresa onde atuava, mostrando sua habilidade.

Além disso, ele foi eternizado em seus livros sobre finanças, dentre os quais destacam-se “O Investidor Inteligente” e “Análise de Investimentos”.</p>
        </div>

        <div className="InvestPage">
          <h3>Warren Buffett</h3>
          <p>Buffet começou com uma estratégia de pesquisar ativos subavaliados para lucrar com seus dividendos, mas gradualmente mudou sua mentalidade e passou a usar a estratégia de análise fundamentalista, que consiste em procurar bons negócios por um preço justo.

Ele é o presidente da Berkshire-Hathaway, empresa que possui participação relevante em ações de instituições financeiras, empresas de infraestrutura, ações de tecnologia e outras.</p>
        </div>

        <div className="InvestPage">
          <h3>George Soros</h3>
          <p>George Soros é formado em filosofia, possuindo mestrado na área. Ingressou no mercado financeiro e foi ganhando notoriedade com o tempo.

De fato, grande parte de sua fortuna foi conquistada “shorteando” moedas estrangeiras e lucrando com sua variação de preço, ganhando muito no mercado de câmbio.</p>
        </div>

        <div className="InvestPage">
          <h3>Luiz Barsi</h3>
          <p>Luiz Barsi Filho é um dos maiores investidores individuais da Bolsa de Valores do Brasil, conhecido como o "Rei dos Dividendos". Nascido em 10 de março de 1939, em São Paulo, ele construiu sua fortuna por meio de uma estratégia de investimentos focada em ações de empresas que pagam dividendos, adotando uma abordagem de longo prazo conhecida como buy and hold</p>
        </div>

        {/* Tipos de Investimentos */}
        <h1 className="text-center">Tipos de Investimentos</h1>

        <div className="TiposInvest">
          <h3>Ações</h3>
          <ul>
            <li>O que são: Compra de pequenas partes...</li>
            <li>Risco: Alto</li>
            <li>Objetivo: Valorização do capital...</li>
            <li>Exemplo: Petrobras, Vale, Apple...</li>
          </ul>
        </div>

        <div className="TiposInvest">
          <h3>Renda Fixa</h3>
          <ul>
            <li>O que são: Investimentos com rentabilidade definida...</li>
            <li>Risco: Baixo a médio</li>
            <li>Objetivo: Retorno previsível</li>
            <li>Exemplo: Tesouro Direto, CDBs...</li>
          </ul>
        </div>

        <div className="TiposInvest">
          <h3>Fundos Imobiliários (FIIs)</h3>
          <ul>
            <li>O que são: Fundos que investem em imóveis...</li>
            <li>Risco: Médio</li>
            <li>Objetivo: Rentabilidade com base em aluguéis</li>
            <li>Exemplo: KNRI11, HGLG11</li>
          </ul>
        </div>
      </div>

    
    </>
  );
}