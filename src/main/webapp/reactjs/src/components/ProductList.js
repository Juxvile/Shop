import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {getProduct} from "../api/api";

export default class ProductList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }


    componentDidMount() {
        (async ()=>{
            const data = await getProduct()
            this.setState({games: data})
        })();
    }


    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header align="center">Game Catalog</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            {this.state.games.length === 0 ?
                                <Col align="center"> Games Available.</Col> :
                                this.state.games.map((game) => (
                                    <div style={{backgroundImage: "url(" + game.filename + ")"}} className="games" key={game.id}>
                                        <p>{game.name}</p>
                                        <p>{game.price}$</p>
                                    </div>
                                ))
                            }
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        )
    }
}

