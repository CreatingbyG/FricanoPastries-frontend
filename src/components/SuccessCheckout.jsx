import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessCheckout = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Configura un temporizador para redirigir al usuario después de 3 segundos
  //   const timer = setTimeout(() => {
  //     navigate('/');
  //   }, 8000); 

  //   // Limpieza del temporizador si el componente se desmonta antes de que se complete el tiempo
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <div className="success-checkout">
      <div className="success-content">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
          <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
        <p className='success__message'>YOUR ORDER IS CONFIRMED</p>
        <p className='success__message'>We'll send you a shipping confirmation email as soon as your order ships.</p>
      </div>
    </div>
  );
};

export default SuccessCheckout;