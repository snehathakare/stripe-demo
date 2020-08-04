import React from 'react';
import './style.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './App.css';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51HCOj3GsajdjnsixJx7WDSSRS0A0pSp2NDYrpWdfA6CvIiZj4Lu1yo4BvIbhvqf3jsZmQjTYDXjRZuDyY1C9yH5Y00CAS1Ycaf');

const App = () => {
  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default App;
