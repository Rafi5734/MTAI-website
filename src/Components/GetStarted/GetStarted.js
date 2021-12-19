import React from "react";
import { Container, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./getStarted.css";
const GetStarted = () => {
    return (
        <>
            <Container fluid style={{ marginTop: "100px", overflow: "hidden" }}>
                <Container className="mb-5">
                    <div>
                        <h1
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                                marginBottom: "50px",
                            }}
                            className="text-center"
                        >
                            Let`s get started
                        </h1>
                        <p
                            className="text-center"
                            style={{ fontFamily: "Courier New" }}
                        >
                            Use SpreadSimple and Google Sheets to manage your
                            content and create an attractive and functional
                            website.
                        </p>
                        <br />
                        <p
                            className="text-center"
                            style={{ fontFamily: "Courier New" }}
                        >
                            You start with Free plan.
                        </p>
                        <p
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                            className="text-center"
                        >
                            You can test drive Pro plan free for full 7 days (no
                            credit card required).
                        </p>
                        <div className="start-img">
                            <div>
                                <img
                                    src="https://spreadsimple.com/images/get-started-boy.svg"
                                    className="img-fluid"
                                ></img>
                            </div>

                            <div>
                                <Button
                                    variant="outline-success"
                                    style={{
                                        marginTop: "35%",
                                        marginLeft: "30%",
                                    }}
                                    className="text-nowrap try-button"
                                >
                                    Try It Out
                                </Button>{" "}
                            </div>

                            <div>
                                <img
                                    src="https://spreadsimple.com/images/get-started-girl.svg"
                                    className="ms-auto img-fluid"
                                ></img>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default GetStarted;
