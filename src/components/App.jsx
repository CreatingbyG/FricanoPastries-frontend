import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import SidebarMenu from "./SidebarMenu";
import Cakes from './Cakes';
import Concept from './Concept';
import Footer from './Footer';
import Contact from './Contact';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [cart, setCart] = useState(() => {
    // Cargar el carrito desde localStorage o iniciar con un array vacío
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const animatingTimeoutRef = useRef();

  
  useEffect(() => {
    // Guardar el carrito en localStorage cada vez que cambie
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (cake) => {
    console.log('Adding to cart:', cake); // Depuración: verifica que la función se llame
    setCart((prevCart) => {
      const updatedCart = [...prevCart, cake];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      console.log('Cart after adding:', updatedCart); // Depuración: verifica el carrito actualizado
      return updatedCart;
    });
    triggerCartAnimation();
  };

  const triggerCartAnimation = () => {
    console.log('Triggering cart animation'); // Depuración: verifica que la función se llame
    setIsAnimating(true);
    if (animatingTimeoutRef.current) {
      clearTimeout(animatingTimeoutRef.current);
    }
    animatingTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      console.log('Animation ended'); // Depuración: verifica que la animación termine
    }, 1000);
  };

  return (
    <div>
      <Header onLogoHover={() => setIsSidebarVisible(true)} onLogoLeave={() => setIsSidebarVisible(false)} isAnimating={isAnimating}/>
      <SidebarMenu isVisible={isSidebarVisible} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="products" element={<Cakes onAddToCart={handleAddToCart}/>} />
        <Route path="concept" element={<Concept />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;