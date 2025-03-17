import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLogoWhatsapp } from "react-icons/io";


const Cta = () => {
  useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

  return (
    <CtaContainer>
        <h2 data-aos="fade-up">Contactanos y Hacemos un Analisis Comparativo Gratis</h2>
        <div>
        <a href="https://wa.me/+5491150255154" target='_blank' data-aos="fade-up">
        <button><IoLogoWhatsapp className='icono' />Contactanos</button></a>
        </div>
    </CtaContainer>
  )
}

export default Cta

const CtaContainer = styled.section`
    padding: 6rem;

    h2 {
      padding-bottom: 4rem;
      width: 70%;
      margin: auto;
    }

    div {
      display: flex;
      justify-content: center;
    }

    a {
      text-decoration: none;
    }

    button {
      background-color: #1da851;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 0.5rem;
      box-shadow: 0 0 10px #1da851;
      &:hover {
    background-color: #1da851;
  }

      .icono {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 682px) {
      padding: 2rem;

      h2 {
        width: 100%;
      }
    }
`