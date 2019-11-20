import React from 'react';
import {Link} from "react-router-dom";

const UserNav = () => {

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload()
    }


    return(
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

export default UserNav