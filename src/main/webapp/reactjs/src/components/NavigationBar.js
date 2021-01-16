import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class NavigationBar extends React.Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    Gamer's Shop
                </Link>

                <Nav className="mr-auto">
                    <Link to={"/add"} className="nav-link">Add Product</Link>
                    <Link to={"/product"} className="nav-link">Product List</Link>
                </Nav>
                <Nav>
                    <Link to={"/login"} className="nav-link">Login</Link>
                    <Link to={"/registration"} className="nav-link">Registration</Link>
                </Nav>
            </Navbar>
        )
    }
}