import React from "react";
import styled from "styled-components";
import house from "../assets/house.jpg";

const Home = () => {
  return (
    <HomeContainer>
      <div className="background">
        <div className="content">
      <h1>
      Vendé o Alquilá Tu Propiedad <span>Rápido y al Mejor Precio</span>
      </h1>
      <p>
      Tu propiedad destacada, más visible y vendida en menos tiempo, con el respaldo de RE/MAX.
      </p>
      <a href="https://wa.me/+5491150255154" target='_blank'>
        <button>Quiero vender/alquilar mi propiedad</button>
      </a>
      </div>
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  background-size: cover;
  background-position: center;
  

  .background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${house});
    width: 97%;
    height: 94%;
    background-size: cover;
    background-position: center;
    border-radius: 0.8rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center; 

    .content {
      background-color: #ffffff4f;
      color: #fff;
      padding: 5.5rem 0rem;
      border-radius: 1rem;
      width: 80%;
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      span {
        color: #fff;
        padding: 3px 15px;
        background-color: var(--primary-color);
      }

      h1 {
        font-size: 4rem;
        padding: 0 0.4rem;
            }

      p {
        font-size: 18px;
      }

    }
  }

  @media (max-width: 850px) {
    .background {
    .content {
      padding: 2rem;
      width: 90%;

      h1 {
        font-size: 2.8rem;
        padding: 0;
      }
    }
  }
  }
`;
