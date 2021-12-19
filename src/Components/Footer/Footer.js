import React from "react";
import { Container, InputGroup, Button, FormControl } from "react-bootstrap";
import "./footer.css";
import LogoImg from "../Images/dark_logo_transparent_background.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <Container fluid className="footer-main">
            <Container className="footer-sub">
                <div className="img-links">
                    <a href="#home">
                        <img
                            src={LogoImg}
                            className="img-fluid mt-5"
                            // id="#home"
                        ></img>
                    </a>
                    <div className="all-social mb-5">
                        <i className="fab fa-facebook-f me-auto p-3"></i>
                        <i className="fab fa-linkedin-in me-auto p-3"></i>
                        <i className="fab fa-youtube me-auto p-3"></i>
                    </div>
                </div>
                <div>
                    <h1
                        className="text-center mt-5 mb-5"
                        style={{
                            fontFamily: "Courier New",
                            fontWeight: "bold",
                        }}
                    >
                        Tools
                    </h1>
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        IMPORTJSON formula
                    </p>
                </div>
                <div>
                    <h1
                        className="text-center mt-5 mb-5"
                        style={{
                            fontFamily: "Courier New",
                            fontWeight: "bold",
                        }}
                    >
                        Integrations
                    </h1>
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        Whatsapp
                    </p>
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        PayPal
                    </p>
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        Stripe
                    </p>
                </div>
                <div>
                    <h1
                        className="text-center mt-5 mb-5"
                        style={{
                            fontFamily: "Courier New",
                            fontWeight: "bold",
                        }}
                    >
                        About
                    </h1>
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        Pricing
                    </p>
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        Showcase
                    </p>
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        Templates
                    </p>
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        Blog
                    </p>
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        Help
                    </p>
                </div>
                <div>
                    <h1
                        className="text-center mt-5 mb-5"
                        style={{
                            fontFamily: "Courier New",
                            fontWeight: "bold",
                        }}
                    >
                        Stay Up to date
                    </h1>
                    <>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter Your Email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button
                                variant="outline-secondary"
                                id="button-addon2"
                            >
                                <i class="fab fa-telegram-plane"></i>
                            </Button>
                        </InputGroup>
                    </>
                </div>
            </Container>
        </Container>
    );
};

export default Footer;
