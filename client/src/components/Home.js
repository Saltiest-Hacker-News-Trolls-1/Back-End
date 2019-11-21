import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { Nav, NavItem, Card, } from 'reactstrap';

const Home = () => {
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
      <div className="logo"><img src={logo} alt="logo" /></div>
      <h1 className="title">SALTIEST</h1>
      <h1 className="title">HACKER</h1>
      </Card>
      <div className="saltyPeopleSection">
        <div className="saltyPeopleBox">
          <Card style={{backgroundColor: '#F1EBEB', border: '1px solid #FD8936'}} className="saltyPeople mb-2 shadow-sm">John D Rockefeller</Card>
          <Card style={{backgroundColor: '#F1EBEB', border: '1px solid #FD8936'}} className="saltyPeople mb-2 shadow-sm">Chaung Hee</Card>
          <Card style={{backgroundColor: '#F1EBEB', border: '1px solid #FD8936'}} className="saltyPeople mb-2 shadow-sm">Francis Ngannou</Card>
        </div>
        <p className="textBox">We measure the saltiness/negativity of your users, allowing you to filter out negativity form your social platform, and provide a more positive experience to your users. We also allow users on our map to vote on particular users, allowing a more fine grained selection process.</p>
      </div>
    </div>
  );
};

export default Home;