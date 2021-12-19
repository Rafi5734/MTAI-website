import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import UseCases from "../UseCases/UseCases";
import "./why.css";
const Why = () => {
    return (
        <>
            <Container fluid className="why-main">
                <div>
                    <h1
                        style={{
                            marginTop: "100px",
                            fontWeight: "bold",
                            fontFamily: "Courier New",
                            marginBottom: "70px",
                        }}
                        className="text-center"
                    >
                        Why?
                    </h1>
                </div>
                <Container>
                    <div className="why-cols">
                        <div>
                            <Card style={{ width: "20rem", border: "none" }}>
                                <Card.Img
                                    variant="top"
                                    src="https://spreadsimple.com/images/reasons-section/easy-to-manage.svg"
                                    className="img-fluid"
                                />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            fontFamily: "Courier New",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Modern, feature-rich websites
                                    </Card.Title>
                                    <Card.Text
                                        style={{ fontFamily: "Courier New" }}
                                    >
                                        Not a professional developer? No
                                        problem! Using SpreadSimple, you can
                                        create beautiful, modern websites
                                        without the need for any special
                                        knowledge. You get features like
                                        filtering, search, sorting, lead
                                        collection via forms, SEO and much more,
                                        right out of the box.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="mb-5">
                            <Card style={{ width: "20rem", border: "none" }}>
                                <Card.Img
                                    variant="top"
                                    src="https://spreadsimple.com/images/reasons-section/modern-website.svg"
                                    className="img-fluid"
                                />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            fontFamily: "Courier New",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Blazing fast setup
                                    </Card.Title>
                                    <Card.Text
                                        style={{ fontFamily: "Courier New" }}
                                    >
                                        Compared to existing solutions,
                                        SpreadSimple saves time when you’re
                                        creating and managing content. Use it
                                        for 20 minutes, and you're all set.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "20rem", border: "none" }}>
                                <Card.Img
                                    variant="top"
                                    src="https://spreadsimple.com/images/reasons-section/blazing-fast.svg"
                                    className="img-fluid"
                                />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            fontFamily: "Courier New",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Easy to manage data
                                    </Card.Title>
                                    <Card.Text
                                        style={{ fontFamily: "Courier New" }}
                                    >
                                        Harness the power of Google Sheets to
                                        manage your inventory, prices, and
                                        orders. It supports formulas and
                                        expressions, collaborative edits, chats
                                        and many other features.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Container>
            <UseCases></UseCases>
        </>
    );
};

export default Why;
