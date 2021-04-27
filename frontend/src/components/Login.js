import React from 'react';
import {Card, Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

const API_URL = "http://localhost:8075/login";

class Login extends React.Component{


    login(username,password){
        return axios
            .post(API_URL, {username,password})
            .then ((response) => {
                if (response.data.accessToken){
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout(){
        localStorage.removeItem("user");
    }

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    async handleFormSubmit(event) {
        event.preventDefault();

        const endpoint = "http://localhost:8075/login"

        const user_object = {...this.state};

        const res = await axios.post(endpoint, user_object);

       localStorage.setItem("authorization", res.data.token);

       return this.handleDashboard();

    }
    handleDashboard() {
        axios.get("http://localhost:8075/dashboard").then(res => {
            if (res.data === "success") {
                this.props.history.push("/dashboard");
            } else {
                alert("Authentication failure");
            }
        });
    }

    render() {

        return (
                    <Card>
                        <Card className={"border border-dark bg-dark text-white cards"}>
                            <Card.Header align="center"><h2>Login</h2></Card.Header>

                            <Form onReset={this.resetUser} onSubmit={this.handleFormSubmit()}>
                                <Card.Body>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control required autoComplete="off"
                                                          type="text" name="username"
                                                          value={username}
                                                          placeholder="Enter Username"/>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control required autoComplete="off"
                                                          type="password" name="password"
                                                          value={password}
                                                          placeholder="Enter Password"/>
                                        </Form.Group>
                                    </Form.Row>
                                </Card.Body>
                                <Card.Footer align="right">
                                    <Button size="sm" variant="success" type="submit">
                                        Login
                                    </Button>{' '}
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

export default Login;
