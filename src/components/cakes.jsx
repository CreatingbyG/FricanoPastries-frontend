import React from 'react';
import strawberryCake from "../assets/Fresa.png";
import strawberryAndPassion from "../assets/fresa-y-maracuya.png";
import strawberryBroken from "../assets/Fresa-broken.png";
import chouxVainilla from "../assets/chouxmantecado.png";
import chouxVainillaAndChocolate from "../assets/chouxmantecadoychocolate.png";
import chouxChocolate from "../assets/chouxchocolate.png";
import choux from "../assets/Choux.png";
import "bootstrap-icons/font/bootstrap-icons.css";


const cakes = [
  { id: 1, name: 'Strawberry', imageUrl: strawberryCake, description: 'Descripción de la torta de chocolate', price: 20 },
  { id: 2, name: 'Strawberry and Passion', imageUrl: strawberryAndPassion, description: 'Descripción de la torta de vainilla', price: 18 },
  { id: 3, name: 'Strawberry Broken', imageUrl: strawberryBroken, description: 'Descripción de la torta de vainilla', price: 18 },
  { id: 4, name: 'Choux Vainilla', imageUrl: chouxVainilla, description: 'Descripción de la torta de vainilla', price: 18 },
  { id: 5, name: 'Choux Vainilla and Chocolate', imageUrl: chouxVainillaAndChocolate, description: 'Descripción de la torta de vainilla', price: 18 },
  { id: 6, name: 'Choux Chocolate', imageUrl: chouxChocolate, description: 'Descripción de la torta de vainilla', price: 18 },
  { id: 7, name: 'Choux', imageUrl: choux, description: 'Descripción de la torta de vainilla', price: 18 },
  {id: 8, imageUrl: <i class="bi bi-emoji-frown-fill" style={{ fontSize: "50px" }}></i>, description: "Sorry, we are currently working in more for you"}

];

const Cakes = ({ setAnimate, addToCart }) => {

  const handleBuyClick = (cake) => {
    setTimeout(() => setAnimate(true), 10);
  setTimeout(() => setAnimate(false), 3010); 
  addToCart(cake);
  };



  return (
    <div className="cakes-container" id="cakes-container">
      {cakes.map((cake) => (
        <div key={cake.id} className="cake-card">
          {cake.id !== 8 ? (
            <>
              <img src={cake.imageUrl} alt={cake.name} />
              <div className="cake-description">
                <p>{cake.name}</p>
                <p>{cake.description}</p>
                <p>{cake.price}</p>
                <button type="button" className="buy__button" onClick={() => handleBuyClick(cake)}>Buy</button>
              </div>
            </>
          ) : (
            <>
              {cake.imageUrl}
              <div className="cake-description">
                <p>{cake.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cakes;