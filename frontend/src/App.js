import React, {useState} from 'react';
import './css/App.css';
import NavigationBar from "./components/NavigationBar";
import {Col, Container, Row} from 'react-bootstrap'
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import {SingleProduct} from './components/SingleProduct'
import Registration from "./components/Registration";
import Login from "./components/Login";


const App = () => {

    const [hasAuth, setHasAuth] = useState(false);

    const marginTop = {
        marginTop: "20px",
    };

    return (
        <Router>
            <NavigationBar hasAuth={hasAuth} setHasAuth={setHasAuth}/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Switch>
                            <Route path="/" exact component={Welcome}/>
                            <Route path="/add" exact component={Product}/>
                            <Route path="/product" exact component={ProductList}/>
                            <Route path="/product/:id" exact component={SingleProduct}/>
                            <Route path="/registration" exact component={Registration}/>
                            <Route path="/login" exact component={Login}><Login hasAuth={hasAuth}
                                                                                    setHasAuth={setHasAuth}/> </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Router>
    );
}

export default App;
