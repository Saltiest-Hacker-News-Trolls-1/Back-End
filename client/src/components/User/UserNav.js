import React from 'react';
import { Link, withRouter } from "react-router-dom";

const UserNav = (props) => {

  const handleLogout = () => {
    localStorage.clear();
    props.history.push("/");
  }


  return (
    <div className="App-Wrap">

      <div className="Nav">
        <div>
          <Link className="UserProfile" to="UserProfile">My Profile</Link>
        </div>

        <div>
          <Link to="/" className="Logout" onClick={handleLogout} >Logout</Link>

        </div>


      </div>
    </div>
  )
}

export default withRouter(UserNav)