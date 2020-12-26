import React from 'react';
import {Card, Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class Product extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.gameChange = this.gameChange.bind(this);
        this.submitGame = this.submitGame.bind(this);
    }

    initialState = {
        name:'', description: '', count: '', price: '', filename: ''
    }

    resetGame = () => {
        this.setState(() => this.initialState);
    }

    submitGame(event) {
        event.preventDefault();

        const game = {
            name: this.state.name,
            description: this.state.description,
            count: this.state.count,
            price: this.state.price,
            filename: this.state.filename
        };

        axios.post("http://localhost:8085/product", game)
            .then(response => {
                if(response.data !== null) {
                    this.setState(this.initialState);
                    alert("Game Saved Successfully")
                }
            });
    }

    gameChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }



    render() {

        const {name,description,count,price,filename} = this.state;

        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header align="center">Game Catalog</Card.Header>

                            <Form onReset={this.resetGame} onSubmit={this.submitGame} id="gameFormId">
                                <Card.Body>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="name"
                                            value={name}
                                            onChange={this.gameChange}
                                            placeholder="Enter Game Name" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="description"
                                            value={description}
                                            onChange={this.gameChange}
                                            placeholder="Enter Description" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCount">
                                        <Form.Label>Count</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="count"
                                            value={count}
                                            onChange={this.gameChange}
                                            placeholder="Enter amount" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPrice">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="price"
                                            value={price}
                                            onChange={this.gameChange}
                                            placeholder="Enter Price" />
                                    </Form.Group>
                                </Form.Row>
                                    <Form.Group controlId="formGridFilename">
                                        <Form.Label>Image URL</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text"
                                            value={filename}
                                            onChange={this.gameChange}
                                            name="filename" label="Add Image" />
                                    </Form.Group>
                                </Card.Body>
                                        <Card.Footer align="right">
                                            <Button size="sm" variant="success" type="submit">
                                                Add Game
                                            </Button>{' '}
                                            <Button size="sm" variant="info" type="reset">
                                                Reset
                                            </Button>
                                        </Card.Footer>
                            </Form>
            </Card>
        )
    }
}
