import React from 'react';
import {Jumbotron} from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default class Welcome extends React.Component{
    render() {
        return (
            <Card>
                <Jumbotron className="bg-dark text-white hello">
                    <h1>Gamer's Shop</h1>
                    <h4>Whatever you want...</h4>
                    <h6>And even more :)</h6>
                </Jumbotron>
            </Card>
        )
    }
}
