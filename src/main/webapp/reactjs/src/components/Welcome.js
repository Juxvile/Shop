import React from 'react';
import {Jumbotron} from "react-bootstrap";

export default class Welcome extends React.Component{
    render() {
        return (
            <Jumbotron className="bg-dark text-white cards">
                <h1>Gamer's Shop</h1>
                <p>Whatever you want...</p>
            </Jumbotron>
        )
    }
}
