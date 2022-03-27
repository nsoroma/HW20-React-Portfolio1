import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "./components/Container";
import Navigation from './components/Navigation';
import Header from "./components/Header";

import Main from "./components/Main";
import Footer from "./components/Footer";


import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
       <Navigation />
        <Header />
        <Footer />
        
<Container>
          <Routes>
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} /> 
          </Routes>
        </Container>
    </Router>
  );
}

export default App;


