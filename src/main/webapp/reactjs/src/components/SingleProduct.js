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
                            <Row key={game.id}>
                                <Col>
                                    <Image style={{
                                        backgroundImage: "url(" + game.filename + ")",
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }} className="game">
                                    </Image>
                                </Col>
                                <Col className="singleGame">
                                    <h1>{game.name}</h1>
                                    <h1>{game.price}$</h1>
                                    <div>{game.description}</div>
                                    <br/>
                                    <iframe title="trailer" className="trailerFrame" src={game.trailer}/>
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
