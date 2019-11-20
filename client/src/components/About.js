import React from 'react';
import { Link } from 'react-router-dom';
import saltShaker from '../saltShaker.svg';
import { Nav, NavItem, Card, } from 'reactstrap';

const About = () => {
  return (
    <div className="App-Wrap">

<Nav pills className="p-2 d-flex justify-content-around mb-2 shadow-sm">
        
        <NavItem>
          <Link className="Login" to="/login">Login</Link>

        </NavItem>
        
        <NavItem>
          <Link className="Register" to="/register">Sign Up</Link>
        </NavItem>

        <NavItem>
          <Link className="About" to="/about">About</Link>
        </NavItem>

        <NavItem>
          <Link className="Home" to="/">Home</Link>
        </NavItem>


      </Nav>
      <Card style={{backgroundColor: '#EDFDFA'}} className="shadow-sm ">
      <h1 className="aboutTitle1">WHY</h1>
      <h1 className="aboutTitle2">SO</h1>
      <h1 className="aboutTitle3">SALTY?</h1>
      <div className="saltShaker"><img src={saltShaker} alt="saltShaker" />
      </div>
      </Card>
      <Card style={{backgroundColor: '#EDFDFA'}} className="shadow-sm d-flex justify-content-center">
          <div className="saltText">
        <div className="saltPile">
        <p className="aboutText">We make it our goal to encapsulate the essence of developer rage, the very force that was vital in the making of this website. Here, you will find scores of recorded frustration for your admiration or entertainment.</p>
        <p className="aboutText">[more sample text]</p>
        </div>
        </div>
        
      </Card>
    </div>
  );
};

export default About;