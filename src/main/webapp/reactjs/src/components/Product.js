import React from 'react';
import {Card, Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MyToast from "./MyToast";
import axios from "axios";

export default class Product extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.gameChange = this.gameChange.bind(this);
        this.submitGame = this.submitGame.bind(this);
    }


    initialState = {
        name:'', description: '', count: '', price: '', filename: '', genre: ''
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
            filename: this.state.filename,
            genre: this.state.genre
        };

        axios.post("http://localhost:8085/product/add", game)
            .then(response => {
                if(response.data !== null) {
                    this.setState({"show": true});
                    setTimeout(() => this.setState({"show": true}), 3000);
                } else {
                    this.setState({"show": false});
                }
            });

        this.setState(this.initialState);
    }


    gameChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }




    render() {

        const {name,description,count,price,filename} = this.state;


        return (
            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast children={{show:this.state.show, message:"Game Saved Successfully."}}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header align="center"><h2>Game Catalog</h2></Card.Header>

                    <Form onReset={this.resetGame} onSubmit={this.submitGame}>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="name"
                                                  value={name}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter Game Name" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="description"
                                                  value={description}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter Description" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Count</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="count"
                                                  value={count}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter amount" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="price"
                                                  value={price}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter Price" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>FileURL</Form.Label>
                                <Form.Control autoComplete="off"
                                              type="text" name="filename"
                                              value={filename}
                                              onChange={this.gameChange}
                                              placeholder="Enter File URL" />
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
            </div>
        )
    }
}
