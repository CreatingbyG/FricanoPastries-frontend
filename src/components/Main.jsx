import React from 'react';
import productsIcon from '../assets/mainproducts.png'; 
import aboutUsIcon from '../assets/whoweare.png'; 

const Main = () => {
  return (
    <main className='content'>
      <section className="main-content products" id="products">
        <div className="products__icon">
          <img className="main-content-images" src={productsIcon} alt="Products" />
        </div>
        <h2>PRODUCTS</h2>
      </section>
      <section className="main-content about-us" id="about-us">
        <div className="abouts-us__icon">
          <img className="main-content-images" src={aboutUsIcon} alt="About us" />
        </div>
        <h2>ABOUT US</h2>
      </section>
    </main>
  );
};

export default Main;