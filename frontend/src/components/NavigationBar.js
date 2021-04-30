import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavigationBar = ({hasAuth, setHasAuth}) => (


    // кнопка логаут, компонент кнопка (как навбар)
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
                    ? <Link onClick={()=>setHasAuth(false)} className="nav-link">Logout</Link>
                    : <><Link to={"/login"} className="nav-link">Login</Link> <Link to={"/registration"} className="nav-link">Registration</Link></>
            }
        </Nav>
    </Navbar>
);

export default NavigationBar;