import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import NavLink from "react-bootstrap/NavLink";

const NavigationBar = ({hasAuth, setHasAuth}) => (

    <Navbar bg="dark" variant="dark">
        <Link to={""} className="navbar-brand">
            Gamer's Shop
        </Link>

        <Nav className="mr-auto">
            <Link to={"/add"} className="nav-link">Add Product</Link>
            <Link to={"/product"} className="nav-link">Product List</Link>
        </Nav>
        <Nav>
            {
                hasAuth
                    ? <NavLink onClick={()=>setHasAuth(false)} className="nav-link">Logout</NavLink>
                    : <><Link to={"/login"} className="nav-link">Login</Link> <Link to={"/registration"} className="nav-link">Registration</Link></>
            }
        </Nav>
    </Navbar>
);

export default NavigationBar;