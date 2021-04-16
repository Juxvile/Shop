import React from 'react';
import {Jumbotron} from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Welcome = () => (
    <Card>
        <Jumbotron className="bg-dark text-white hello">
            <h1>Gamer's Shop</h1>
            <h4>Whatever you want...</h4>
            <h6>And even more :)</h6>
        </Jumbotron>
    </Card>
);


export default Welcome;