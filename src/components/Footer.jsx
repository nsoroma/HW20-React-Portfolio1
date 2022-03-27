import React from "react";
import { Link } from "react-router-dom";
import './Product.css';
import Portfolio from "../pages/Portfolio";


const linkGitHub = "https://github.com/nsoroma";
const linkEmail = "dontspammebro@example.com";
const linkLinkedIn = "https://www.linkedin.com/in/raquel-watson/";
const linkResume = "./assets/Raquel Watson_2022.pdf";


const Footer = () => {
  return (
<div>
    <footer class="site-header sticky-bottom py-1">
      <nav class="container d-flex flex-column flex-md-row justify-content-between">
        <Link to={linkGitHub} class="py-2 d-none d-md-inline-block" >GitHub</Link>
        <Link to={linkLinkedIn} class="py-2 d-none d-md-inline-block" >LinkedIn</Link>
        <Link to={Portfolio} class="py-2 d-none d-md-inline-block" >Portfolio</Link>
        <Link to={linkResume} class="py-2 d-none d-md-inline-block" >Credentials</Link>
        <Link to={linkEmail} class="py-2 d-none d-md-inline-block" >Contact Me</Link>
    </nav>
</footer>
</div>
    );
};

export default Footer;
