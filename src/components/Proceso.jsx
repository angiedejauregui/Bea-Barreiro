import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";

const Proceso = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ProcesoContainer>
        <h2>Paso a Paso de Nuestro Servicio</h2>
      <div className="container" >
        <div data-aos="fade-up">
          <span>1</span>
          <p>
            Visitamos la propiedad y definimos una estrategia para venderla
            rápido.
          </p>
        </div>
        <div data-aos="fade-up">
          <span>2</span>
          <p>
            Realizamos un análisis comparativo de mercado y establecemos el mejor precio.
          </p>
        </div>
        <div data-aos="fade-up">
          <span>3</span>
          <p>Nos ocupamos de toda la parte legal y documental.</p>
        </div>
        <div data-aos="fade-up">
          <span>4</span>
          <p>
            Contratamos un fotógrafo profesional y creamos un anuncio
            irresistible.
          </p>
        </div>
        <div data-aos="fade-up">
          <span>5</span>
          <p>Publicamos en los portales inmobiliarios más importantes.</p>
        </div>
        <div data-aos="fade-up">
          <span>6</span>
          <p>Te acompañamos en cada negociación hasta cerrar la operación.</p>
        </div>
      </div>
      <a href="https://wa.me/+5491150255154" target="_blank"><button>Quiero vender/alquilar</button></a>
    </ProcesoContainer>
  )
}

export default Proceso

const ProcesoContainer = styled.section`
    padding: 4rem;
    
    h2 {
        color: var(--secondary-color);
    }
    
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem 1.5rem;
        margin: 5rem auto;
        padding: 0 2rem;
    
        div {
        display: flex;
        gap: 1rem;
        align-items: center;
        border-radius: 0.8rem;
        padding: 1rem;
        color: #fff;
        background-color: var(--primary-color);
        text-align: start;
    
        span {
            font-size: 2rem;
        }

        }
    }
    
    button {
      color: #fff;
    }


    @media (max-width: 850px) { 
      padding: 2rem; 
      
        .container {
            grid-template-columns: 1fr;
            margin: 4rem auto;
        }
    }

`