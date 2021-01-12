import React from 'react';
import {getOneProduct} from "../api/api";
import {withRouter} from 'react-router-dom';
import {Card, Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class SingleProductContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            id:  this.props.match.params.id
        };
    }

    componentDidMount() {
        (async ()=>{
            const data = await getOneProduct(this.state.id);
            this.setState({games: data})
        })();
    }


    render() {

        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Body>
                    <Container>
                        {this.state.games.map((game) => (
                            <Row>
                                <Col>
                                    <Image style={{
                                        backgroundImage: "url(" + game.filename + ")",
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }} className="game">
                                    </Image>
                                </Col>
                                <Col className="singleGame" key={game.id}>
                                    <h1>{game.name}</h1>
                                    <p>{game.description}</p>
                                    <p>{game.count}</p>
                                    <p>{game.price}</p>
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </Card.Body>
            </Card>
        )
    }
}

export const SingleProduct = withRouter(SingleProductContainer);
