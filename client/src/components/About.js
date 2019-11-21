import React from 'react';
import saltShaker from '../saltShaker.svg';
import { Card, } from 'reactstrap';
import Navbar from './Navigation';

const About = () => {
  return (
    <div className="App-Wrap">

<Navbar/>
      <Card style={{backgroundColor: '#F8F5E1'}} className="shadow-sm ">
      <h1 className="aboutTitle1">WHY</h1>
      <h1 className="aboutTitle2">SO</h1>
      <h1 className="aboutTitle3">SALTY?</h1>
      <div className="saltShaker"><img src={saltShaker} alt="saltShaker" />
      </div>
      </Card>
      <Card style={{backgroundColor: '#F8F5E1'}} className="shadow-sm d-flex justify-content-center align-items-center">
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