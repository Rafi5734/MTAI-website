import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import GetStarted from "../GetStarted/GetStarted";
import "./moreInfo.css";
const MoreInfo = () => {
    return (
        <>
            <Container fluid className="moreInfo-main">
                <Container>
                    <div>
                        <h1
                            className="text-center"
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                                marginTop: "100px",
                            }}
                        >
                            More information in our blog
                        </h1>
                    </div>
                    <div className="mt-5 info">
                        <Card style={{ width: "22rem", marginBottom: "20px" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/blog/content/images/size/w600/2021/11/183197095_10224888282973297_1484027522476310396_n.jpg"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Card Title
                                </Card.Title>
                                <Card.Text
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Go somewhere
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: "22rem", marginBottom: "20px" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/blog/content/images/size/w600/2021/10/add-checkbox.png"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Card Title
                                </Card.Title>
                                <Card.Text
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Go somewhere
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: "22rem", marginBottom: "20px" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/blog-3.png"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Card Title
                                </Card.Title>
                                <Card.Text
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Go somewhere
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </Container>
            <GetStarted></GetStarted>
        </>
    );
};

export default MoreInfo;
