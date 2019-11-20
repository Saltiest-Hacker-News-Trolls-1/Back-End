import React from 'react';
import { Nav, NavItem, NavLink, } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => {

    const { pathname } = props.location;

    return (
        <Nav pills style={{ zIndex: 99 }} className="p-2 d-flex justify-content-around mb-2 shadow-sm">
            <NavItem style={{ cursor: "pointer" }}>
                <NavLink active={pathname === "/login"} onClick={() => { props.history.push("/login") }}>Login</NavLink>
            </NavItem>
            <NavItem style={{ cursor: "pointer" }}>
                <NavLink active={pathname === "/register"} onClick={() => { props.history.push("/register") }}>Register</NavLink>
            </NavItem>
            <NavItem style={{ cursor: "pointer" }}>
                <NavLink active={pathname === "/about"} onClick={() => { props.history.push("/about") }}>About</NavLink>
            </NavItem>
            <NavItem style={{ cursor: "pointer" }}>
                <NavLink active={pathname === "/"} onClick={() => { props.history.push("/") }}>Home</NavLink>
            </NavItem>
        </Nav>
    );
}

export default withRouter(Navbar);
