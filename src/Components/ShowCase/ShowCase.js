import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "./showCase.css";
const ShowCase = () => {
    return (
        <Container fluid className="showCase-main">
            <Container>
                <div>
                    <h1
                        className="text-center"
                        style={{
                            fontFamily: "Courier New",
                            fontWeight: "bold",
                            marginTop: "100px",
                            marginBottom: "50px",
                        }}
                    >
                        Showcase
                    </h1>
                    <p
                        style={{
                            fontFamily: "Courier New",
                            fontWeight: "bold",
                        }}
                    >
                        Selection of websites made by our users with
                        SpreadSimple, ranging from e-stores and listings to
                        portfolios and catalogues. Have a look, get inspired and
                        start creating your own! 🚀
                    </p>
                    <Button
                        variant="outline-info"
                        className="mt-5"
                        style={{
                            fontFamily: "Courier New",
                        }}
                    >
                        SUBMIT YOUR WEBSITE
                    </Button>{" "}
                </div>
            </Container>
            <Container className="cards mt-5">
                <Card style={{ width: "24rem", marginBottom: "30px" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.imgur.com/31ObaTh.png"
                        className="img-fluid"
                    />
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            isLostMyAirpod
                        </Card.Title>
                        <hr />
                        <Card.Text
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            Lost your airpod? We've all been there… Luckily, on
                            this website you can buy only what you really need —
                            only right or only left airpod, or just a charging
                            case. Paypal checkout is available, and if you have
                            any questions or need help, you can ask them right
                            there on the website
                        </Card.Text>
                        <Button
                            variant="primary"
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            View
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "24rem", marginBottom: "30px" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.imgur.com/Dn8sruJ.png"
                        className="img-fluid"
                    />
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            Legit.ie?
                        </Card.Title>
                        <hr />
                        <Card.Text
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            Consumer curated site that lists websites with IE
                            domain that ship from the UK or abroad, and provides
                            Irish local alternatives. Contribute to the both
                            lists by filling the embedded form.
                        </Card.Text>
                        <Button
                            variant="primary"
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            View
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "24rem", marginBottom: "30px" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.imgur.com/RjxcDaC.png"
                        className="img-fluid"
                    />
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            City Map Prints
                        </Card.Title>
                        <hr />
                        <Card.Text
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            Wholesale art prints for decor with more than 1,000
                            locations available for order. Search and filters
                            will help to find your favorite spot in the world
                            and get it printed for your home or office
                        </Card.Text>
                        <Button
                            variant="primary"
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            View
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "24rem", marginBottom: "30px" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.imgur.com/7ES59F0.png"
                        className="img-fluid"
                    />
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            Christmas at my place
                        </Card.Title>
                        <hr />
                        <Card.Text
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            Shopping for Christmas gifts or decors? Don't miss
                            this online catalog of beautiful arts, homewares,
                            food & drink from the best independent sellers
                            throughout Cornwall
                        </Card.Text>
                        <Button
                            variant="primary"
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            View
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "24rem", marginBottom: "30px" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.imgur.com/PYCWBzm.png"
                        className="img-fluid"
                    />
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            Aapta Solutions Store
                        </Card.Title>
                        <hr />
                        <Card.Text
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            The official store website of Aapta Solutions, web
                            design, development and digital marketing service.
                            There you can learn more about the agency, some of
                            their micro services and order one right on the
                            website
                        </Card.Text>
                        <Button
                            variant="primary"
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            View
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "24rem", marginBottom: "30px" }}>
                    <Card.Img
                        variant="top"
                        src="https://i.imgur.com/JyHR2G6.png"
                        className="img-fluid"
                    />
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            Los Mejores Patinetes
                        </Card.Title>
                        <hr />
                        <Card.Text
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            An affiliate store of electric scooters, electric
                            bicycles, hoverboards, accessories, and insurance.
                            Multiple filters, detailed descriptions, and video
                            reviews will help you choose the right CO2-free
                            vehicle for you.
                        </Card.Text>
                        <Button
                            variant="primary"
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            View
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
};

export default ShowCase;
