import React from "react";
import './Product.css';


const linkGitHub = "https://github.com/nsoroma";
const linkEmail = "dontspammebro@example.com";
const linkLinkedIn = "https://www.linkedin.com/in/raquel-watson/";
const linkResume = "./assets/Raquel Watson_2022.pdf";


const Footer = () => {
  return (
    <div>
        <div class="text-muted">

          <span class="socialIcon"> 
            <a href={linkGitHub} rel="noreferrer" target="_blank">
            <i class="fa fa-github fa-2x ml-2 mr-2" aria-label="GitHub Icon"></i></a> 
          </span>

          <span class="socialIcon"> 
            <a href={linkLinkedIn} rel="noreferrer" target="_blank">
            <i class="fa fa-file-o fa-2x ml-2 mr-2" aria-label="Resume Icon"></i></a> 
          </span>

          <span class="socialIcon"> 
            <a href={linkEmail} rel="noreferrer" target="_blank">
            <i class="fa fa-envelope-o fa-2x ml-2 mr-2" aria-label="Email Icon"></i></a> 
          </span>

          <span class="socialIcon"> <a href={linkResume} rel="noreferrer" target="_blank"><i class="fa fa-linkedin fa-2x ml-2 mr-2" aria-label="LinkedIn Icon"></i></a> </span>
        </div>
    </div>
    );
};

export default Footer;
