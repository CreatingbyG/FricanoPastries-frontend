const express = require("express");
const Stripe = require("stripe");
require('dotenv').config(); 

const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {

  const session = await stripe.checkout.sessions.create({
    line_items : req.body.cartItems.map ((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: item.desc,
            metadata: {
              id: item.id,
              imageUrl: item.image,
            },
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    }),
    mode: 'payment',
    success_url: 'http://localhost:3000/?success=true',
    cancel_url: 'http://localhost:3000/?cancel=false',
  });

  res.send({url: session.url});
});



module.exports = router;
