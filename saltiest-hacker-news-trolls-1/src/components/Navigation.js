import React from 'react';
import { Nav, NavItem, NavLink, } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => {

    const { pathname } = props.location;

    return (
        <Nav pills className="p-2 d-flex justify-content-around mb-2 shadow-sm">
            <NavItem>
                <Link to="/login"><NavLink active={pathname === "/login"} >Login</NavLink></Link>
            </NavItem>
            <NavItem>
                <Link to="/register"><NavLink active={pathname === "/register"}>Sign Up</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="/about"><NavLink active={pathname === "/about"}>about</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="/"><NavLink active={pathname === "/"}>home</NavLink></Link>
            </NavItem>
        </Nav>
    );
}

export default withRouter(Navbar);
