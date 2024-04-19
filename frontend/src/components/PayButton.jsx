import React from 'react';

import axios from "axios";


  const PayButton = ({cartItems}) => {
  
    const handleCheckout = () => {
      axios
        .post(`/stripe/create-checkout-session`, {
          cartItems,
        })
        .then((response) => {
          if (response.data.url) {
            window.location.href = response.data.url;
          }
        })
        .catch((err) => console.log(err.message));
    };

  return (
    <>
      <button className="checkout-button" onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};


export default PayButton;