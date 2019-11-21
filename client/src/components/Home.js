import React from 'react';
import logo from '../logo.svg';
<<<<<<< HEAD
import { Card } from 'reactstrap';
=======
import {  Card } from 'reactstrap';
>>>>>>> 6a452f573cea1f3995a8f5eb857a334599c3a550
import Navbar from './Navigation';

const Home = () => {
  return (
    <div className="App-Wrap">

<<<<<<< HEAD
      <Navbar />
      <Card style={{ backgroundColor: '#EDFDFA' }} className="shadow-sm ">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <h1 className="title">SALTIEST</h1>
        <h1 className="title">HACKER</h1>
      </Card>
      <div className="saltyPeopleSection">
        <Card className="saltyPeopleBox mb-2 shadow-sm d-flex justify-content-center align-items-center">
          <Card style={{ backgroundColor: '#F1EBEB', border: '1px solid #FD8936' }} className="saltyPeople mb-2 shadow-sm">John D Rockefeller</Card>
          <Card style={{ backgroundColor: '#F1EBEB', border: '1px solid #FD8936' }} className="saltyPeople mb-2 shadow-sm">Chaung Hee</Card>
          <Card style={{ backgroundColor: '#F1EBEB', border: '1px solid #FD8936' }} className="saltyPeople mb-2 shadow-sm">Francis Ngannou</Card>
=======
<Navbar/>
      <Card style={{backgroundColor: '#F8F5E1'}} className="shadow-sm ">
      <div className="logo"><img src={logo} alt="logo" /></div>
      <h1 className="title">SALTIEST</h1>
      <h1 className="title">HACKER</h1>
      </Card>
      <div className="saltyPeopleSection">
        <Card className="saltyPeopleBox mb-2 shadow-sm d-flex justify-content-center align-items-center">
        <h1 className="bsos">Blue screen of SALT: </h1>
          <div className="saltyPeopleContainer">
          <Card style={{backgroundColor: '#F1EBEB', border: '1px solid #FD8936'}} className="saltyPeople mb-2 shadow-sm">John D Rockefeller</Card>
          <Card style={{backgroundColor: '#F1EBEB', border: '1px solid #FD8936'}} className="saltyPeople mb-2 shadow-sm">Chaung Hee</Card>
          <Card style={{backgroundColor: '#F1EBEB', border: '1px solid #FD8936'}} className="saltyPeople mb-2 shadow-sm">Francis Ngannou</Card>
          </div>
>>>>>>> 6a452f573cea1f3995a8f5eb857a334599c3a550
        </Card>
        <p className="textBox">We measure the saltiness/negativity of your users, allowing you to filter out negativity form your social platform, and provide a more positive experience to your users. We also allow users on our map to vote on particular users, allowing a more fine grained selection process.</p>
      </div>
    </div>
  );
};

export default Home;