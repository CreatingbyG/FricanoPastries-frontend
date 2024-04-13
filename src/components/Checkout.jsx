import React, { useContext }  from 'react';
import CurrentCartContext from '../contexts/CurrentCartContext';


const Checkout = () => {
    const { cartItems } = useContext(CurrentCartContext);
  return (
    <div className="checkout">
      <h1 className="checkout__title">Your Order</h1>
      <form className="checkout-form">
        <div className="billing-details">
          <h2 className="checkout__form-titles">Billing Details</h2>
          <input className="checkout__box" type="text" placeholder="First Name" required />
          <input className="checkout__box" type="text" placeholder="Last Name" required />
          <input className="checkout__box" type="email" placeholder="Email" required />
          <input className="checkout__box" type="text" placeholder="Phone Number" required />
        </div>
        <div className="shipping-details">
          <h2 className="checkout__form-titles">Shipping Details</h2>
          <input className="checkout__box" type="text" placeholder="Address" required />
          <input className="checkout__box" type="text" placeholder="City" required />
          <input className="checkout__box" type="text" placeholder="State/Province" required />
          <input className="checkout__box" type="text" placeholder="Postal Code" required />
        </div>
        <div className="order-summary">
          <h2 className="checkout__form-titles">Your Order:</h2>
          {cartItems.map(item => (
            <div key={item.id} className="order-item">
              <img src={item.imageUrl} alt={item.name} style={{ width: '50px', height: '50px' }} />
              <div>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
    </form>
      <form className="checkout-form">
        <div className="payment-info">
          <h2 className="checkout__form-titles">Payment</h2>
          <div class="input_container">
          <label for="password_field" class="input_label">Card holder full name</label>
          <input className="checkout__box" type="text" placeholder="Enter your full name" required />
          </div>
          <div class="input_container">
          <label for="password_field" class="input_label">Card Number</label>
          <input className="checkout__box" type="tel" placeholder="0000 0000 0000 0000" required pattern="\d{16}" title="Card number must be 16 digits" />
          </div>
          <div class="input_container input_container-cvv">
          <label for="password_field" class="input_label">Expiry Date / CVV</label>
          <input className="checkout__box" type="text" placeholder="MM/YY" required pattern="(0[1-9]|1[0-2])\/[0-9]{2}" title="Enter a valid date in MM/YY format" />
          <input className="checkout__box checkout__box-cvv" type="tel" placeholder="CVV" required pattern="\d{3,4}" title="CVV must be 3 or 4 digits" />
          </div>
        </div>
      </form>
      <button className="finalize-order-btn">Place Order</button>
    </div>
  );
};


export default Checkout;

