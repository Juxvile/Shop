import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Col, Container, Row} from 'react-bootstrap'
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {SingleProduct} from './components/SingleProduct'
import Registration from "./components/Registration";
import Login from "./components/Login";



const App = () => {

    const marginTop = {
        marginTop: "20px",
    };

  return (
    <Router>
      <NavigationBar/>
      <Container>
          <Row>
              <Col lg={12} style={marginTop}>
                  <Switch>
                      <Route path="/" exact component={Welcome}/>
                      <Route path="/add" exact component={Product}/>
                      <Route path="/product" exact component={ProductList}/>
                      <Route path="/product/:id" exact component={SingleProduct}/>
                      <Route path="/registration" exact component={Registration}/>
                      <Route path="/login" exact component={Login}/>
                  </Switch>
              </Col>
          </Row>
      </Container>
        <Footer/>
    </Router>
  );
}

export default App;
