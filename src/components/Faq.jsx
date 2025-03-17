import React, { useState } from "react";
import styled from "styled-components";

const questions = [
  {
    question: "¿Por qué elegir un agente RE/MAX?",
    answer:
      "Porque RE/MAX trabaja con una red de agentes colaborativa, lo que multiplica las oportunidades de venta y permite que tu propiedad llegue a más compradores.",
  },
  {
    question: "¿Es mejor trabajar con una sola inmobiliaria o con varias?",
    answer:
      "Con una exclusiva, el agente invierte más en marketing y publicidad, aumentando las posibilidades de venta rápida y al mejor precio.",
  },
  {
    question: "¿Puedo vender o alquilar sin un agente?",
    answer:
      "Podés intentarlo, pero el 80% de los propietarios que lo hacen terminan tardando más y bajando el precio. Un agente profesional se encarga de negociar por vos y asegurarte la mejor operación.",
  },
  {
    question: "¿También ayudás a encontrar propiedades para comprar o alquilar?",
    answer:
      "¡Sí! Te acompañamos en la búsqueda de tu próxima casa y te ayudamos a encontrar las mejores oportunidades.",
  },
];

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <FaqContainer>
      <div className="faq-title">
        <h2 data-aos="fade-up">Preguntas Frecuentes</h2>
      </div>
      <div className="faq" data-aos="fade-up">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-heading" onClick={() => toggleFaq(index)}>
              <h3 className={activeFaq === index ? "active" : ""}>
                {item.question}
              </h3>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                >
                  <path
                    d="M1.88 0.453125L8 6.55979L14.12 0.453125L16 2.33312L8 10.3331L0 2.33312L1.88 0.453125Z"
                    fill={activeFaq === index ? "#A07904" : "#000"}
                  />
                </svg>
              </span>
            </div>
            {activeFaq === index && <p className="answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </FaqContainer>
  );
};

export default Faq;

const FaqContainer = styled.section`
  padding: 5rem 6rem 4rem 6rem;
  background-color: var(--primary-color);
  text-align: center;

  .faq-title {
    text-align: center;
    margin-bottom: 3rem;
    padding: 0rem 5rem;
    width: fit-content;
    margin: auto;
  }

  h2 {
    border: none;
    padding: 0;
    margin: 0;
    color: #000;
  }

  .faq {
    max-width: 1000px;
    margin: 2rem auto;
    text-align: left;
  }

  .faq-item {
    border-bottom: 1px solid #000;
    padding: 1.5rem 0;
    width: 100%;
  }

  .faq-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0;
    font-weight: bold;
  }

  .answer {
    padding: 0.5rem 0;
    color: #000;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    transition: transform 0.2s;
  }

  @media (max-width: 850px) {
    padding: 4rem 2rem;

    .faq {
      grid-template-columns: 1fr;
    }

    .faq-title {
      padding: 0rem;
      width: 100%;
    }

    .faq-heading {
      gap: 1rem;
    }

    h2 {
      font-size: 2rem;
      width: 100%;
    }
  }
`;
