import React, { useEffect, useRef } from 'react';
import aboutUsIcon from '../assets/whoweare.png'; 
import pavlovaIcon from '../assets/heartchoux.webp';
import "bootstrap-icons/font/bootstrap-icons.css";

const Main = () => {
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // La callback se ejecuta cuando el elemento es observado
        if (entries[0].isIntersecting) {
          // Agrega la clase para iniciar la animación
          aboutUsRef.current.classList.add('slide-in-right');
        }
      },
      { threshold: 0.5 } // Se dispara cuando el 50% del elemento está visible
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    // Limpiar el observer al desmontar el componente
    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
    };
  }, []);

  return (
    <main className='content'>
      <section className="products">
      <h2 className="products__title">Welcome to Fricano Pastries</h2>
      <div className="title-bar"></div>
        <img className="pavlova" src={pavlovaIcon} alt="Pavlova"/>
      </section>
      <section className="about-us">
        <div className="about-us__icon" id="about-us">
        <div className="title-bar"></div>
          <img className="main-content-images-about-us" src={aboutUsIcon} alt="About us" />
          <div className="title-bar"></div>
        </div>
        <div className="about-us__description" ref={aboutUsRef}>
        <h2 className="about-us__title">ABOUT US</h2>
        <p className="about-us__text">At the heart of our ecommerce beats the passion to delight the most demanding palates with our exquisite artisanal choux and pavlovas.</p>
        <p className="about-us__text">Our history is a mix of tradition and creativity. Each pavlova and choux is a masterpiece that reflects our commitment to quality and excellence.</p>
        <p className="about-us__text">Behind every sweet creation is a passionate team that strives to bring you the best in every bite. We assure you that you will live a unique experience and you will surely come back for more.</p>
        </div>
      </section>
    </main>
  );
};

export default Main;