import React from 'react';
import { Link } from 'react-router-dom';
import saltShaker from '../saltShaker.svg';


const About = () => {
  return (
    <div className="App-Wrap">

      <div className="Nav">
        <div>
          <Link className="Register" to="/register">Register</Link>
        </div>


        <div>
          <Link className="Login" to="/login">Login</Link>

        </div>
        
        <div>
          <Link className="About" to="/about">About</Link>
        </div>

        <div>
          <Link className="Home" to="/">Home</Link>
        </div>


      </div>
      <div className="aboutTitle">
      <h1 className="aboutTitle1">WHY</h1>
      </div><h1 className="aboutTitle2">SO</h1>
      <h1 className="aboutTitle3">SALTY?</h1>
      <div className="saltShaker"><img src={saltShaker} alt="saltShaker" />
      </div>
      <div className="saltPileContainer">
          <div className="saltText">
        <div className="saltPile">
        <p className="aboutText">We make it our goal to encapsulate the essence of developer rage, the very force that was vital in the making of this website. Here, you will find scores of recorded frustration for your admiration or entertainment.</p>
        <p className="aboutText">[more sample text]</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;