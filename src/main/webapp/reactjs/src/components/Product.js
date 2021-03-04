import React from 'react';
import {Card, Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MyToast from "./MyToast";
import axios from "axios";
import {Spring} from "react-spring/renderprops";

export default class Product extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.gameChange = this.gameChange.bind(this);
        this.submitGame = this.submitGame.bind(this);
    }


    initialState = {
        name:'', description: '', count: '', price: '', filename: '', genre: '',
        trailer: '', platform: '', developer: '', releaseDate: '', description2: '', sysReq: '',
        screenshot1: '', screenshot2: '', screenshot3: ''

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
            genre: this.state.genre,
            trailer: this.state.trailer,
            platform: this.state.platform,
            developer: this.state.developer,
            releaseDate: this.state.releaseDate,
            description2: this.state.description2,
            sysReq: this.state.sysReq,
            screenshot1: this.state.screenshot1,
            screenshot2: this.state.screenshot2,
            screenshot3: this.state.screenshot3
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

        const {name,description,count,price,filename,genre,
            trailer, platform, releaseDate, developer, description2,
            sysReq, screenshot1, screenshot2,screenshot3} = this.state;


        return (
            <Spring
                from={{ opacity: 0, marginTop: -1000 }}
                to={{ opacity: 1, marginTop: 0 }}>
                {props =>
            <div style={props}>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast children={{show:this.state.show, message:"Game Saved Successfully."}}/>
                </div>
                <Card className={"border border-dark bg-dark text-white cards"}>
                    <Card.Header align="center"><h2>Add Game</h2></Card.Header>

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

                            <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>FileURL</Form.Label>
                                <Form.Control autoComplete="off"
                                              type="text" name="filename"
                                              value={filename}
                                              onChange={this.gameChange}
                                              placeholder="Enter File URL" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                    <Form.Label>Genre</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="genre"
                                                  value={genre}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter Genre" />
                            </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>TrailerURL</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="trailer"
                                                  value={trailer}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter Trailer URL" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Platform</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="platform"
                                                  value={platform}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter Platform" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Developer</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="developer"
                                                  value={developer}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter Developer" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Release Date</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="releaseDate"
                                                  value={releaseDate}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter Release Date" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Description2</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="description2"
                                                  value={description2}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter Description2" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>System Requirements</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="sysReq"
                                                  value={sysReq}
                                                  onChange={this.gameChange}
                                                  placeholder="Enter System Requirements" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Screenshot1</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="screenshot1"
                                                  value={screenshot1}
                                                  onChange={this.gameChange}
                                                  placeholder="Screenshot1" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Screenshot2</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="screenshot2"
                                                  value={screenshot2}
                                                  onChange={this.gameChange}
                                                  placeholder="Screenshot2" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Screenshot3</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="screenshot3"
                                                  value={screenshot3}
                                                  onChange={this.gameChange}
                                                  placeholder="Screenshot3" />
                                </Form.Group>
                            </Form.Row>
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
                }
            </Spring>
        )
    }
}
