import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



const testimoniosData = [
  {
    nombre: "Beatriz Miranda",
    estrellas: "⭐⭐⭐⭐⭐",
    texto:
      "Excelente asesoramiento recibí sobre cómo encarar el alquiler temporario de la quinta. Beatriz Barreiro es muy amable y virtuosa porque no solo comprende las necesidades de los clientes sino que trasciende estar muy bien capacitada y con su firmeza y profesionalismo transmite confianza para lograr cerrar operaciones. Trabaja en Re/max PowerPoint, una empresa muy competente y competitiva y ella lo acredita con su dedicación y sus logros",
  },
  {
    nombre: "Adriana Horvath",
    estrellas: "⭐⭐⭐⭐⭐",
    texto:
      "Bea, te quería agradecer todo tu trabajo y dedicación. Lo hiciste con mucho profesionalismo y siempre con mucho respeto y buena onda.",
  },
  {
    nombre: "Matias Massotti",
    estrellas: "⭐⭐⭐⭐⭐",
    texto: "Excelente atención de Bea Barreiro, en una semana nos alquiló el depto y ahora se lo dimos para la venta.",
  },
  {
    nombre: "Mercedes Barreiro",
    estrellas: "⭐⭐⭐⭐⭐",
    texto: "Gracias a Beatriz Barreiro por acompañarnos en el proceso de búsqueda de un nuevo hogar.",
  },
  {
    nombre: "Magali Stoliar",
    estrellas: "⭐⭐⭐⭐⭐",
    texto: "Gracias Diana y Bea y a todo el equipo de Remax Power por la atención, desde el primer momento, impecable.",
  },
];

const Testimonio = () => {

  return (
    <TestimoniosContainer>
            <h2>Lo que Dicen Algunos de mis Clientes</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="swiper-container"
      >
        {testimoniosData.map((testimonio, index) => (
          <SwiperSlide key={index} className="testimonio">
            <div className="encabezado">
              <p><b>{testimonio.nombre}</b></p>
              <span>{testimonio.estrellas}</span>
            </div>
            <p>{testimonio.texto}</p>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </TestimoniosContainer>
  );
};

export default Testimonio;

const TestimoniosContainer = styled.section`
   padding: 3rem 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  .swiper-container {
    width: 100%;
    margin: 5rem auto;
  }

  .testimonio {
    padding: 2rem;
    border-radius: 1rem;
    border: 2px solid var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    width: 100%;
    box-sizing: border-box;
  }

  .encabezado {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: var(--secondary-color);
    color: #fff;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 13px;
    font-weight: bold;
  }

  @media (max-width: 850px) { 
    padding: 4rem 2rem;

    .swiper-button-prev,
    .swiper-button-next {
      display: none !important;
    }
  }
`;
