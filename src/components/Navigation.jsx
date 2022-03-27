import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Product.css';

const Navigation = () => {

    return (
// Header from Bootstrap - Product
<div>
    <header class="site-header sticky-top py-1">
        <nav class="container d-flex flex-column flex-md-row justify-content-between">
        <Link to='/' class="py-2 d-none d-md-inline-block" >Home</Link>
        <a class="py-2 d-none d-md-inline-block" href="/aboutme">About Me</a>
        <Link to='/portfolio' class="py-2 d-none d-md-inline-block" >Portfolio</Link>
        <Link to='/resume' class="py-2 d-none d-md-inline-block" >Credentials</Link>
        <Link to='Contact' class="py-2 d-none d-md-inline-block" >Contact Me</Link>

    </nav>
</header>
</div>
);
};
export default Navigation;