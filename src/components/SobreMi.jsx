import React from "react";
import styled from "styled-components";
import fotoMia from "../assets/fotoMia.jpeg";

const SobreMi = () => {
  return (
    <SobreMiContainer>
      <div className="container">
        <img src={fotoMia} alt="Foto de Beatriz Barreiro" />
        <div>
          <h2>Tu Propiedad Merece lo Mejor. Nos Encargamos de Que Así Sea</h2>
          <p>
            Si estás pensando en vender o alquilar, necesitas más que solo
            publicar tu propiedad en un portal. Necesitas una estrategia
            efectiva y un profesional que se encargue de todo.
          </p>
          <br />
          <p>
            Soy Bea Barreiro, agente inmobiliaria de RE/MAX Power, con más de 5
            años de experiencia, especializada en zona norte, barrios cerrados y
            countries. Te ofrezco un servicio exclusivo, personalizado y
            respaldado por la red inmobiliaria más grande del mundo.
          </p>
        </div>
      </div>
    </SobreMiContainer>
  );
};

export default SobreMi;

const SobreMiContainer = styled.section`
  padding: 4rem 5rem;

  .container {
    width: 45rem;
    height: 26rem;
    background-color: var(--primary-color);
    padding: 2.5rem;
    border-radius: 2rem;
    display: flex;
    margin: auto;
    text-align: start;
    color: #323232;
    position: relative;
    right: 2rem;

    img {
      position: absolute;
      top: 8.5rem;
      right: -5rem;
      width: 300px;
      height: 330px;
      border-radius: 2rem;
      object-fit: cover;
    }

    p {
      margin-right: 15.5rem;
      font-size: 18px;
      width: 26rem;
    }
  }

  h2 {
    margin-bottom: 2rem;
    color: #1d1c1c;
  }

  @media (max-width: 900px) {
    padding: 4rem 2rem;

    .container {
      width: 90%;
      height: auto;
      padding: 2rem;
      flex-direction: column;
      gap: 2rem;
      text-align: center;
      position: static;

      h2 {
        font-size: 2.4rem;
      }

      img {
        width: 260px;
        height: 280px;
        position: static;
        transform: none;
        margin: auto;
      }

      p {
        margin: auto;
        width: 100%;
      }
    }
  }

  @media (max-width: 582px) {
    .container {
      height: auto;
      padding: 1.5rem;
      width: 100%;

      h2 {
        font-size: 2.2rem;
      }

      img {
        width: 240px;
        height: 260px;
      }
    }
  }
`;
