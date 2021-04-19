import React from 'react';
import {Col, Container, Navbar} from "react-bootstrap";

const FULL_YEAR = new Date().getFullYear();

const Footer = () => (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{FULL_YEAR}-{FULL_YEAR + 1},All Rights Reserved by Gamer's Shop</div>
                    </Col>
                </Container>
            </Navbar>
        );

export default Footer;

