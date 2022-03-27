import React from "react";
import './Product.css';
import HeadshotProfile from '../assets/images/Headshot_ACEditBig.png';
import background from '../assets/images/DigitalCustomerJourney2.jpg';


const Header = () => {
  return (
    <div class="mw-100 overflow-hidden p-3 p-md-5 m-md-3 bg-light">
      <div class="px-4 py-5 my-5 text-center"
        style={{ backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width:'100%' }} >
        <h1 class="display-4 fw-bold">Raquel Watson</h1>
        <h2 class="display-6 fw-bold">Solutions to Advance Your Customer's Journey</h2>
      </div>

      <div class="position-absolute text-left">
        <img src= { HeadshotProfile } class="img-fluid w-25 float-left" alt="Responsive image"></img>
      </div>

      <div class="text-left">
        <p>Raquel says work</p>
      </div>

  </div>
);
};
export default Header;


