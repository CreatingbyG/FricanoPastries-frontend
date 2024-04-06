import React from 'react';
import productsIcon from '../assets/mainproducts.png'; 
import aboutUsIcon from '../assets/whoweare.png'; 
import pavlovaIcon from '../assets/heartchoux.webp';
import "bootstrap-icons/font/bootstrap-icons.css";

const Main = () => {
    const scrollToCakes = () => {
        document.getElementById('cakes-container').scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <main className='content'>
      <section className="main-content" id="main-products">
        <div className="products__icon">
          <img className="main-content-images" src={productsIcon} alt="Products" />
        </div>
        <h2>PRODUCTS</h2>
        <div className="about-us__icon" id="about-us">
          <img className="main-content-images-about-us" src={aboutUsIcon} alt="About us" />
        </div>
        <h2>ABOUT US</h2>
      </section>
      <section className="products">
      <div className="title-bar"></div>
        <h2 className="products__title">Our Pavlovas and Choux</h2>
        <img className="pavlova" src={pavlovaIcon} alt="Pavlova"/>
        <div className="see-more" onClick={scrollToCakes}>
          <span>See more</span>
          <i class="bi bi-chevron-double-down" style={{size:"24", padding:"4px"}}></i>
        </div>
      </section>
    </main>
  );
};

export default Main;