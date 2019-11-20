import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Nav = () => {
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


      </div>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <h1 className="title">SALTIEST</h1>
      <h1 className="title">HACKER</h1>
      <div className="saltyPeopleSection">
        <div className="saltyPeopleBox">
          <div className="saltyPeople">John D Rockefeller</div>
          <div className="saltyPeople">Chaung Hee</div>
          <div className="saltyPeople">Francis Ngannou</div>
        </div>
        <p className="textBox">We measure the saltiness/negativity of your users, allowing you to filter out negativity form your social platform, and provide a more positive experience to your users. We also allow users on our map to vote on particular users, allowing a more fine grained selection process.</p>
      </div>
    </div>
  );
};

export default Nav;