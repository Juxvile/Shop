import React from 'react';
import {Card, Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Redirect} from "react-router-dom";


class Login extends React.Component {
    initState = {
        username: '',
        password: ''
    }

    state = this.initState;

    handleFormSubmit = async () => {
        const {setHasAuth} = this.props;

        const res = await axios.post('http://localhost:8075/login', this.state);

        if (res?.data?.token) {
            setHasAuth(true)
            this.setState(this.initState);
        }
    }


    render() {
        const {username, password} = this.state;
        const {hasAuth} = this.props;

        if (hasAuth) {
            return <Redirect to="/product" />
        } 
        
        return (
            <Card>
                <Card className={"border border-dark bg-dark text-white cards"}>
                    <Card.Header align="center"><h2>Login</h2></Card.Header>

                    <Form onReset={this.resetUser}>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="username"
                                                  value={username}
                                                  onChange={(e) => this.setState({username: e.target.value})}
                                                  placeholder="Enter Username"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="password" name="password"
                                                  value={password}
                                                  onChange={(e) => this.setState({password: e.target.value})}
                                                  placeholder="Enter Password"/>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer align="right">
                            <Button size="sm" variant="success" type="button" onClick={this.handleFormSubmit}>
                                Login
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

export default Login;
