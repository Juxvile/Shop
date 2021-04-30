import React from 'react';
import {Card, Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MyToast from "./MyToast";
import axios from "axios";

class Registration extends React.Component{

    state = {
        username: '',
        password: '',
        email: '',
        show: false
    };

    userChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    submitUser = event => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        };
        axios.post("http://localhost:8075/registration", user)
            .then(response => {
                if(response.data !== null) {
                    this.setState({"show": true});
                    setTimeout(() => this.setState({"show": false}), 3000);
                } else {
                    this.setState({"show": false});
                }
            });

        this.setState({
            username: '',
            password: '',
            email: '',
        })
    }
    resetUser = () => {
        this.setState(() => this.state);
    }

    render() {

        const {username, password, email, show} = this.state;

        return (
            <Card>
                <div style={{"display": show ? "block" : "none"}}>
                    <MyToast children={{show, message: "Registration Completed."}}/>
                </div>
                <Card className={"border border-dark bg-dark text-white cards"}>
                    <Card.Header align="center"><h2>Registration</h2></Card.Header>

                    <Form onReset={this.resetUser} onSubmit={this.submitUser}>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="username"
                                                  value={username}
                                                  onChange={this.userChange}
                                                  placeholder="Enter Username*"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="password" name="password"
                                                  value={password}
                                                  onChange={this.userChange}
                                                  placeholder="Enter Password*"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="email" name="email"
                                                  value={email}
                                                  onChange={this.userChange}
                                                  placeholder="Enter Email*"/>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer align="right">
                            <Button size="sm" variant="success" type="submit">
                                Registry
                            </Button>
                            {' '}
                            <Button size="sm" variant="info" type="reset">
                                Reset
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </Card>
        )
    }
}

export default Registration