import React from "react";
import styled from "styled-components";
import { IoMdContacts } from "react-icons/io";
import { BsHousesFill } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import { FaCamera, FaPersonChalkboard } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";

const PorqueYo = () => {
  return (
    <PorqueYoContainer>
      <h2>
        Nos Ocupamos de <span className="circle">Todo</span>
      </h2>
      <div className="items">
        <div data-aos="fade-up">
          <div className="icon-wrapper">
            <ImSearch className="icon" />
          </div>
          <h3>Análisis de mercado para fijar el mejor precio.</h3>
        </div>
        <div data-aos="fade-up">
          <div className="icon-wrapper">
            <FaCamera className="icon" />
          </div>
          <h3>Fotografía profesional que destaca tu propiedad.</h3>
        </div>
        <div data-aos="fade-up">
          <div className="icon-wrapper">
            <BsHousesFill className="icon" />
          </div>
          <h3>Publicación en más de 15 portales inmobiliarios</h3>
        </div>
        <div data-aos="fade-up">
          <div className="icon-wrapper">
            <IoMdContacts className="icon" />
          </div>
          <h3>Red de contactos exclusivos con compradores reales.</h3>
        </div>
        <div data-aos="fade-up">
          <div className="icon-wrapper">
            <FaPersonChalkboard className="icon" />
          </div>
          <h3>Asesoramiento legal y financiero para una transacción segura.</h3>
        </div>
        <div data-aos="fade-up">
          <div className="icon-wrapper">
            <MdLocalOffer className="icon" />
          </div>
          <h3>Negociación profesional para cerrar la mejor oferta.</h3>
        </div>
      </div>
      <p>
        Y todo esto <b>SIN PAGOS ADELANTADOS</b>. Solo pagas comisión cuando la
        operación se cierra.
      </p>
      <a href="https://wa.me/+5491150255154" target="_blank">
        <button>Publicar mi propiedad gratis</button>
      </a>
    </PorqueYoContainer>
  );
};

export default PorqueYo;

const PorqueYoContainer = styled.section`
  padding: 4rem 2rem;

  h2 {
    color: var(--secondary-color);
  }

  .circle {
    border-radius: 50%;
    border: solid 3px var(--secondary-color);
    display: inline-block;
    padding: 5px 15px;
  }

  .items {
    margin: 4rem 0;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 3rem 3.5rem;
    justify-items: center;
    justify-content: center;

    div {
      position: relative;
      color: #1a1919;
      padding: 20px;
      border-radius: 40px;
      text-align: center;
      width: 14rem;
      height: 10rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--primary-color);
    }

    img {
      width: 4rem;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--primary-color);
      padding: 10px;
      border-radius: 50%;
    }
    .icon {
      font-size: 2rem;
      color: var(--primary-color);

      display: flex;
      align-items: center;
      justify-content: center;

      width: 4rem;
      height: 4rem;
    }

    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
      background-color: var(--background-color);
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  h3 {
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 18px;
    animation: glow 1.5s infinite alternate;
  }
  @keyframes glow {
    0% {
      text-shadow: 0 0 5px #fff, 0 0 10px var(--primary-color),
        0 0 15px var(--primary-color);
    }
    50% {
      text-shadow: 0 0 10px #fff, 0 0 20px var(--primary-color),
        0 0 30px var(--primary-color);
    }
    100% {
      text-shadow: 0 0 5px #fff, 0 0 10px var(--primary-color),
        0 0 15px var(--primary-color);
    }
  }

  button {
    background-color: #a07904;
    width: 20rem;
    color: #fff;
    margin-top: 3rem;
  }

  @media (max-width: 950px) {
    padding: 4rem 2rem;

    .items {
      margin: 4rem 0;
    }
  }

  @media (max-width: 850px) {
    padding: 2rem;

    .items {
      grid-template-columns: 1fr;
      margin: 4rem 0;
      gap: 2rem;
    }
  }
`;
