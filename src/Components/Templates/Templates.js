import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import "./templates.css";
const Templates = () => {
    return (
        <Container fluid className="templates-main">
            <Container>
                <div>
                    <h1
                        className="text-center"
                        style={{
                            fontFamily: "Courier New",
                            fontWeight: "bold",
                            marginTop: "5rem",
                            marginBottom: "3rem",
                        }}
                    >
                        {" "}
                        Templates
                    </h1>
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        Making a beautiful website has never been faster. Select
                        a template, customize, and you're done. Each template
                        comes with a Google Spreadsheet which you can extend and
                        fill out with your data.
                    </p>
                    <br />
                    <p
                        className="text-center"
                        style={{ fontFamily: "Courier New" }}
                    >
                        ☝️ Templates are just a starting point — you can start
                        with one and then change any options you prefer. The
                        selected template doesn't limit you by no means.
                    </p>
                </div>
                <div className="all-cards mt-5 mb-5">
                    <div className="screen mb-4">
                        <Card style={{ width: "22rem", marginBottom: "20px" }}>
                            <img
                                variant="top"
                                src="https://spreadsimple.com/images/sheet-samples/food-delivery.jpg"
                                className="img-fluid"
                            />
                        </Card>
                    </div>
                    <div className="screen mb-4">
                        <Card style={{ width: "22rem", marginBottom: "20px" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/sheet-samples/tourist-guide.jpg"
                                className="img-fluid"
                            />
                        </Card>
                    </div>
                    <div className="screen">
                        <Card style={{ width: "22rem", marginBottom: "20px" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/sheet-samples/marketing-books.jpg"
                                className="img-fluid"
                            />
                        </Card>
                    </div>
                    <div className="screen">
                        <Card style={{ width: "22rem", marginBottom: "20px" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/sheet-samples/sushi.jpg"
                                className="img-fluid"
                            />
                        </Card>
                    </div>
                    <div className="screen">
                        <Card style={{ width: "22rem", marginBottom: "20px" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/sheet-samples/aircc.jpg"
                                className="img-fluid"
                            />
                        </Card>
                    </div>
                    <div className="screen">
                        <Card style={{ width: "22rem", marginBottom: "20px" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/sheet-samples/emoji-tees.jpg"
                                className="img-fluid"
                            />
                        </Card>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Templates;
