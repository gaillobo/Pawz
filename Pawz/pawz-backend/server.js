require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

require('./connection');


const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const imageRoutes = require('./routes/imageRoutes');

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/images', imageRoutes);
app.use('/', productRoutes);

app.post('/create-payment', async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'cad',
      payment_method_types: ['card'],
    });
    res.status(200).json(paymentIntent);
  } catch (e) {
    res.status(400).json(e.message);
  }
});



const PORT = 3001;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
});
