import React from 'react';
import saltShaker from '../saltShaker.svg';
import { Card, } from 'reactstrap';
import Navbar from './Navigation';

const About = () => {
  return (
    <div className="App-Wrap">

      <Navbar />
      <Card style={{ backgroundColor: 'white' }} className="aboutWrap shadow-sm ">
        <h1 style={{ backgroundColor: 'white' }} className="aboutTitle1">WHY</h1>
        <h1 style={{ backgroundColor: 'white' }} className="aboutTitle2">SO</h1>
        <h1 style={{ backgroundColor: 'white' }} className="aboutTitle3">SALTY?</h1>
        <div style={{ backgroundColor: 'white' }} className="saltShaker"><img src={saltShaker} alt="saltShaker" />
        </div>
      </Card>
      
      <div  className="saltWrap d-flex justify-content-center align-items-center">
        <div className="saltText shadow-sm">
          <div className="saltPile">
            <p className="aboutText">We make it our goal to encapsulate the essence of developer rage, the very force that was vital in the making of this website. Here, you will find scores of recorded frustration for your admiration or entertainment.</p>
            <p className="aboutText">Along side with our developers is that which they bear fruit: their SALT. </p>
          </div>
          
        </div>
      </div>
    
      <div className="saltyPeopleBoxWrap d-flex justify-content-center align-items-center">
      <Card style={{ backgroundColor: '#1569C7', width: '75%' }} className="saltyPeopleBox mb-2 shadow-sm d-flex justify-content-center align-items-center">
          <h1 className="bsos">Salty Developers: </h1>
          <div style={{ marginTop:'20%'}} className="saltyPeopleContainer">
          <h1 style={{ backgroundColor: '#1569C7', border: '2px solid white', width: '90%', fontSize: '2rem' }} className="saltyPeople mb-2 shadow-sm">Front-End:</h1>
            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm">Tanner Hawkins</Card>
            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm">Ian Vaughn</Card>
            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm">Ramon Audain</Card>
            <h1 style={{marginTop:'10%', backgroundColor: '#1569C7', border: '2px solid white', width: '90%', fontSize: '2rem' }} className="saltyPeople mb-2 shadow-sm">Back-End:</h1>
            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm">Igor Atakhanov</Card>
            <h1 style={{marginTop:'10%', backgroundColor: '#1569C7', border: '2px solid white', width: '90%', fontSize: '2rem' }} className="saltyPeople mb-2 shadow-sm">Data Science:</h1>
            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm">John D Rockefeller</Card>
            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm">Chaung Hee</Card>
            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm">Francis Ngannou</Card>
          </div>
        </Card>
        </div>
    </div>
  );
};

export default About;