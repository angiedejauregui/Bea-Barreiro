import React from "react";
import styled from "styled-components";

const AvisoLegal = () => {
  return (
    <AvisoLegalContainer>
    <div>
    <h2>Aviso Legal</h2>
      <p>
        Corredor responsable: Sabrina Cocconi CPI 6800 / CSI 6258.
        En cumplimiento de las normas legales aplicables, todas las operaciones
        inmobiliarias son concluidas por el corredor inmobiliario matriculado y
        colegiado de la oficina RE/MAX. Cada oficina es de gestión
        independiente. La publicación, uso, copia e impresión total o parcial de
        este mensaje o documentos adjuntos queda prohibida. Su contenido no
        puede ser publicado, transmitido o revelado a terceros ni divulgado en
        forma alguna. En cumplimiento de la ley 2340 CUCICBA, Ley 10973 Pcia Bs
        As, Ley 22.802 de Lealtad Comercial, Ley 24240 de Defensa del
        Consumidor, las normas del Código Civil y Comercial de la Nación y
        Constitucionales, los Agentes NO ejercen el corretaje inmobiliario.
      </p>
      </div>
    </AvisoLegalContainer>
  );
};

export default AvisoLegal;

const AvisoLegalContainer = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: auto;

  h2 {
    margin: 2rem;
  }

  p {
    text-align: justify;
    font-size: 18px;
    line-height: 1.5;
  }
`
