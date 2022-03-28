import React from "react";
import './Product.css';
import './heroes.css';

import HeadshotProfile from '../assets/images/Headshot_ACEditBig.png';
import background from '../assets/images/DigitalCustomerJourney2.jpg';


const Header = () => {
  return (
    <div class="px-4 py-5 my-5 text-left"
      style={{ backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width:'100%' }} >
        <img src= { HeadshotProfile } class="img-fluid w-25 float-left" alt="Responsive image"></img>
      <h1 class="display-5 fw-bold text-center">Raquel Watson</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4 fw-bold">Passionate, results-driven technology leader with vast experience leading global, cross-functional teams to plan, build, launch and manage powerful digital innovations. Entrepreneurial and innovative with an exceptional track record as a Global Portfolio Manager, Technical Program Manager, Software Development Manager, and Product Engineer in fast-paced, large-scale corporate environments. Extensive experience developing real-time, customer-facing digital web solutions..</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Portfolio</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Credentials</button>
        </div>
      </div>
    </div>
);
};
export default Header;


