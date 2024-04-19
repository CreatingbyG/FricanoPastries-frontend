import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SidebarMenu from "./SidebarMenu";
import Cakes from "./Cakes";
import Concept from "./Concept";
import Footer from "./Footer";
import Contact from "./Contact";
import Checkout from "./PayButton";
import SuccessCheckout from "./SuccessCheckout";
import CurrentCartContext from "../contexts/CurrentCartContext";


const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [cartItems, setCartItems] = useState(
    []
  )
  const [isOrderActive, setIsOrderActive] = useState(false);


  const addToCart = (cake) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === cake.id);
      if (itemExists) {
        // Incrementa la cantidad
        return prevItems.map((item) =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Agrega el nuevo producto con cantidad 1
        return [...prevItems, { ...cake, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      // Encuentra el producto en el carrito
      const existingItem = prevItems.find((item) => item.id === id);

      // Si solo hay uno, lo elimina completamente
      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== id);
      } else {
        // Si hay más de uno, reduce la cantidad
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  return (
    <CurrentCartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
          <div>
      <Header
        onLogoHover={() => setIsSidebarVisible(true)}
        onLogoLeave={() => setIsSidebarVisible(false)}
        animate={animate}
        setAnimate={setAnimate}
        isOrderActive={isOrderActive}
        setIsOrderActive={setIsOrderActive}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <SidebarMenu isVisible={isSidebarVisible} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="products"
            element={<Cakes setAnimate={setAnimate} addToCart={addToCart} />}
          />
          <Route path="concept" element={<Concept />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout cartItems={cartItems}/>} />
          <Route path="success" element={<SuccessCheckout />} />
        </Routes>
      <Footer />
    </div>
    </CurrentCartContext.Provider>
  );
};

export default App;
