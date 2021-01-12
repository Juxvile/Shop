import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {getProduct} from "../api/api";
import {NavLink} from "react-router-dom";

class ProductList extends React.Component{

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
                <Card.Header align="center"><h2>Game Catalog</h2></Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            {this.state.games.length === 0 ?
                                <Col align="center"> Games Available.</Col> :
                                this.state.games.map((game) => (
                                    <NavLink to={'/product/' + game.id} style={{backgroundImage: "url(" + game.filename + ")"}} className="games" key={game.id}>
                                        <div className="inside">
                                            <p className="name">{game.name}</p>
                                            <p className="name">{game.price}$</p>
                                            <p>{game.description}</p>
                                        </div>
                                    </NavLink>
                                ))
                            }
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductList;

