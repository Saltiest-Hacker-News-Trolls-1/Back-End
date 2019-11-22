import React from 'react';
import logo from '../logo.svg';
import { Card } from 'reactstrap';
import Navbar from './Navigation';

const Home = () => {
  return (
    <div className="App-Wrap">


      <Navbar />
      <Card style={{ backgroundColor: '#F8F5E1' }} className="shadow-sm ">
        <div className="titleWrap">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <h1 className="title">SALTIEST</h1>
        <h1 className="title">HACKER</h1>
        <h1 className="title">NEWS</h1>
        </div>
      </Card>
      <div className="saltyPeopleSection">
        <Card style={{ backgroundColor: '#1569C7' }} className="saltyPeopleBox mb-2 shadow-sm d-flex justify-content-center align-items-center">
          <h1 className="bsos">The blue screen of SALT: </h1>
          <div className="saltyPeopleContainer">

            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm"><p style={{background: '#1569C7'}}>▲Francis Ngannou</p></Card>
            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm"><p style={{background: '#1569C7'}}>Francis Ngannou</p>100000</Card>
            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm"><p style={{background: '#1569C7'}}>Francis Ngannou</p></Card>
            <Card style={{ backgroundColor: '#1569C7', border: '2px solid white' }} className="saltyPeople mb-2 shadow-sm"><p style={{background: '#1569C7'}}>Francis Ngannou</p></Card>
          </div>
        </Card>
        
        <p style={{ backgroundColor: 'white' }} className="textBox mb-2 shadow-sm d-flex justify-content-center align-items-center">We measure the saltiness/negativity of your users, allowing you to filter out negativity form your social platform, and provide a more positive experience to your users. We also allow users on our map to vote on particular users, allowing a more fine grained selection process. Partake with us as we collectively prevent ourselves from smashing a monitor in cathartic rage.</p>
        
      </div>
    </div>
  );
};

export default Home;