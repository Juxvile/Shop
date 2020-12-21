import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

class NavigationBar extends React.Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Shop</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">AddProduct</Nav.Link>
                    <Nav.Link href="#">Product List</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar