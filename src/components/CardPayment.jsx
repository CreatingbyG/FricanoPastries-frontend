// import React, { useEffect, useState } from 'react';

// const CardPayment = () => {
//   const [card, setCard] = useState([]);
//   const [paymentStatus, setPaymentStatus] = useState('');
//   const [isTokenizing, setIsTokenizing] = useState(false);

//   useEffect(() => {
//     const initializeCard = async (payments) => {
//       try {
//         const card = await payments.card();
//         await card.attach('#card-container');
//         setCard(card);
//       } catch (e) {
//         console.error('Initializing Card failed', e);
//       }
//     };

//     const loadSquareSDK = async () => {
//       if (!window.Square) {
//         throw new Error('Square.js failed to load properly');
//       }
//       try {
//         const payments = window.Square.payments('sandbox-sq0idb-55Afk8qrbDimWWLMforJbQ', 'L6AM5RFKAXJ6D');
//         await initializeCard(payments);
//       } catch (error) {
//         console.error('Failed to initialize payments', error);
//         setPaymentStatus('missing-credentials');
//       }
//     };

//     loadSquareSDK();
//   }, []);

//   const createPayment = async (token, verificationToken) => {
//     const body = JSON.stringify({
//       locationId: 'L6AM5RFKAXJ6D',
//       sourceId: token,
//       verificationToken,
//       idempotencyKey: window.crypto.randomUUID(),
//     });

//     const paymentResponse = await fetch('/payment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body,
//     });

//     if (paymentResponse.ok) {
//       return paymentResponse.json();
//     }

//     const errorBody = await paymentResponse.text();
//     throw new Error(errorBody);
//   };

//   const tokenize = async (paymentMethod) => {
//     const tokenResult = await paymentMethod.tokenize();
//     if (tokenResult.status === 'OK') {
//       return tokenResult.token;
//     } else {
//       let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
//       if (tokenResult.errors) {
//         errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
//       }
//       throw new Error(errorMessage);
//     }
//   };

//   const verifyBuyer = async (payments, token) => {
//     const verificationDetails = {
//       amount: '1.00',
//       billingContact: {
//         givenName: 'John',
//         familyName: 'Doe',
//         email: 'john.doe@square.example',
//         phone: '3214563987',
//         addressLines: ['123 Main Street', 'Apartment 1'],
//         city: 'London',
//         state: 'LND',
//         countryCode: 'GB',
//       },
//       currencyCode: 'GBP',
//       intent: 'CHARGE',
//     };

//     const verificationResults = await payments.verifyBuyer(token, verificationDetails);
//     return verificationResults.token;
//   };

//   const handlePaymentMethodSubmission = async (event) => {
//     event.preventDefault();
//     if (isTokenizing) return; // Previene múltiples solicitudes
//     setIsTokenizing(true);

//     try {
//       const token = await tokenize(card);
//       const verificationToken = await verifyBuyer(window.Square.payments('sandbox-sq0idb-55Afk8qrbDimWWLMforJbQ', 'L6AM5RFKAXJ6Dah'), token);
//       const paymentResults = await createPayment(token, verificationToken);
//       setPaymentStatus('SUCCESS');
//       console.debug('Payment Success', paymentResults);
//     } catch (e) {
//       setPaymentStatus('FAILURE');
//       console.error(e.message);
//     } finally {
//       setIsTokenizing(false); // Restablece el estado
//     }
//   };

//   return (
//     <div>
//       <form className="checkout-form">
//         <div className="payment-info">
//           <h2 className="checkout__form-titles">Payment</h2>
//           <div id="card-container" class="input_container"></div>
//           {/* <label for="password_field" class="input_label">Card holder full name</label>
//           <input className="checkout__box"  type="text" placeholder="Enter your full name" required />
//           </div>
//           <div class="input_container">
//           <label for="password_field" class="input_label">Card Number</label>
//           <input className="checkout__box" type="tel" placeholder="0000 0000 0000 0000" required pattern="\d{16}" title="Card number must be 16 digits" />
//           </div>
//           <div class="input_container input_container-cvv">
//           <label for="password_field" class="input_label">Expiry Date / CVV</label>
//           <input className="checkout__box" type="text" placeholder="MM/YY" required pattern="(0[1-9]|1[0-2])\/[0-9]{2}" title="Enter a valid date in MM/YY format" />
//           <input className="checkout__box checkout__box-cvv" type="tel" placeholder="CVV" required pattern="\d{3,4}" title="CVV must be 3 or 4 digits" />
//           </div> */}
//         </div>
//       </form>
//       <button onClick={handlePaymentMethodSubmission} className="finalize-order-btn">Place Order</button>
//       <div id="payment-status-container" className={paymentStatus === 'SUCCESS' ? 'is-success' : 'is-failure'}>
//         {paymentStatus}
//       </div>
//     </div>
//   );
// };

// export default CardPayment;