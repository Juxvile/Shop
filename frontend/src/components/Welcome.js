import React from 'react';
import {Jumbotron} from "react-bootstrap";
import Typical from 'react-typical'

const Welcome = () => (
    <Jumbotron className="helloJumbotron">
        <Typical
            steps={['', 1000, 'Gamer\'s Shop', 5000]}
            loop={1}
            wrapper="p"
            className="mainText"
        />
        <Typical
            steps={['', 3000, 'Whatever you want...', 5000]}
            loop={1}
            wrapper="p"
            className="middleText"
        />
        <Typical
            steps={['', 5000, 'And even more :)', 5000]}
            loop={1}
            wrapper="p"
            className="smallText"
        />
    </Jumbotron>
);


export default Welcome;