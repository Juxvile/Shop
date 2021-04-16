import React,{Component} from 'react';
import {Navbar, Col, Container} from "react-bootstrap";

const FULL_YEAR = new Date().getFullYear();

export default class Footer extends Component{
    render() {

        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{FULL_YEAR}-{FULL_YEAR + 1},All Rights Reserved by Gamer's Shop</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}
