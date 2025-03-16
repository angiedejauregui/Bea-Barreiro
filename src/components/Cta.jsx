import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";

const Cta = () => {
  useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

  return (
    <CtaContainer>
        <h2 data-aos="fade-up">Contanos Hoy y Tazamos tu propiedad gratis</h2>
        <a href="https://wa.me/+5491150255154" target='_blank' data-aos="fade-up"><button>Tazar mi propiedad gratis</button></a>
    </CtaContainer>
  )
}

export default Cta

const CtaContainer = styled.section`
    padding: 6rem;

    h2 {
      margin-bottom: 4rem;
    }
`