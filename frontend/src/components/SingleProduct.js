import React from 'react';
import {getOneProduct} from "../api/api";
import {withRouter} from 'react-router-dom';
import {Card, Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-bootstrap/Carousel";


class SingleProductContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            id:  this.props.match.params.id
        };
    }

    componentDidMount() {
        (async ()=>{
            const data = await getOneProduct(this.state.id);
            this.setState({games: data})
        })();
    }


    render() {

        return (
                    <Card className={"border border-dark bg-dark text-white cards"}>
                        <Card.Body>
                            <Container>
                                {this.state.games.map((game) => (
                                    <Row key={game.id}>
                                        <Col className="singleGame">
                                            <Image style={{
                                                backgroundImage: "url(" + game.filename + ")",
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat'
                                            }} className="gameImage">
                                            </Image>

                                            <Col className="devAndGenre">
                                                <p>Genre:&nbsp;&nbsp;{game.genre}</p>
                                                <p>Platform:&nbsp;&nbsp;{game.platform}</p>
                                                <p>Release date:&nbsp;&nbsp;{game.releaseDate}</p>
                                                <p>Developer:&nbsp;&nbsp;{game.developer}</p>
                                            </Col>

                                            <Col className="screenshots">
                                                <Carousel>
                                                    <Carousel.Item interval={5000}>
                                                        <Image
                                                            className="screens"
                                                            src={game.screenshot1}
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item interval={5000}>
                                                        <Image
                                                            className="screens"
                                                            src={game.screenshot2}
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item interval={5000}>
                                                        <Image
                                                            className="screens"
                                                            src={game.screenshot3}
                                                        />
                                                    </Carousel.Item>
                                                </Carousel>
                                            </Col>

                                        </Col>
                                        <Col className="singleGame">
                                            <h1>{game.name}</h1>
                                            <h1>{game.price}$</h1>
                                            <div className="description">{game.description}</div>
                                            <br/>
                                            <iframe title="trailer" className="trailerFrame" src={game.trailer}/>
                                            <div>
                                                <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
                                                    <Tab eventKey="about" title="About" tabClassName="tab">
                                                        <div className="inTab">
                                                            {game.description2}
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey="system requirements" title="System Requirements"
                                                         tabClassName="tab">
                                                        <div className="inTab">
                                                            {game.sysReq}
                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </Col>
                                    </Row>
                                ))}
                            </Container>
                        </Card.Body>
                    </Card>

        )
    }
}

export const SingleProduct = withRouter(SingleProductContainer);
