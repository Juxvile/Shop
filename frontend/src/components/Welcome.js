import React from 'react';
import {Jumbotron} from "react-bootstrap";
import {Spring} from 'react-spring/renderprops';

export default class Welcome extends React.Component{
    render() {
        return (
                <Spring
                    from={{ opacity: 0, marginTop: -1000 }}
                    to={{ opacity: 1, marginTop: 0 }}>
                    {props =>
                        <div style={props}>
                            <Jumbotron className="bg-dark text-white hello">
                                <h1>Gamer's Shop</h1>
                                <h4>Whatever you want...</h4>
                                <h6>And even more :)</h6>
                            </Jumbotron>
                        </div>
                    }
                </Spring>
        )
    }
}
