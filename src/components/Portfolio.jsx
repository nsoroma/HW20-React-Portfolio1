import React from "react";
import './Product.css';

const PortfolioItm = () => {
    return (
      <div class="row">
         <div class="card">
            <img class="card-img-top" src="./assets/images/Guardians stock.jpg" alt="Guardians of the Galaxy image">,</img>
            <div class="card-body">
               <h4 class="card-title">Guardians of the Code</h4>
               <p class="card-text">Select and display movies from various series of the Marvel Cinematic Universe. Group project focused on utilizing server-side APIs, git branching workflows, and agile software development.</p>
               <a href="https://nsoroma.github.io/Guardians-of-the-Code-Galaxy/" class="btn btn-primary">View Project</a>
            </div>
         </div>
      </div>

     );
};
export default PortfolioItm;