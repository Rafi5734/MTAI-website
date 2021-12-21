import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./blog.css";
const Blog = () => {
    return (
        <>
            <Container fluid className="blog-main">
                <Container fluid className="banner-main">
                    <div className="banner">
                        <h1
                            className="mb-3"
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            SpreadSimple Blog
                        </h1>
                        <h4
                            className="mb-3"
                            style={{ fontFamily: "Courier New" }}
                        >
                            Nocode, Productivity and Automation Tips & Tricks
                        </h4>
                        <Button
                            variant="outline-danger"
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            Subscribe
                        </Button>{" "}
                    </div>
                </Container>
                <Container className="all-blogs mt-5 mb-5">
                    <div className="mb-5">
                        <Card style={{ width: "22rem" }}>
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
                                    Free automation using Google Apps Script:
                                    adding SpreadSimple orders into a Google
                                    Sheet.
                                </Card.Title>
                                <Button
                                    variant="primary"
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Know More
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="mb-4">
                        <Card style={{ width: "22rem" }}>
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
                                    Free automation using Google Apps Script:
                                    adding SpreadSimple orders into a Google
                                    Sheet.
                                </Card.Title>
                                <Button
                                    variant="primary"
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Know More
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="mb-5">
                        <Card style={{ width: "22rem" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/blog/content/images/size/w600/2020/12/10-ways-to-get-data-into-Google-Sheets-3@2x.png"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Free automation using Google Apps Script:
                                    adding SpreadSimple orders into a Google
                                    Sheet.
                                </Card.Title>
                                <Button
                                    variant="primary"
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Know More
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="mb-5">
                        <Card style={{ width: "22rem" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/blog/content/images/size/w600/2020/12/10-ways-to-get-data-into-Google-Sheets-2@2x.png"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Free automation using Google Apps Script:
                                    adding SpreadSimple orders into a Google
                                    Sheet.
                                </Card.Title>
                                <Button
                                    variant="primary"
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Know More
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="mb-5">
                        <Card style={{ width: "22rem" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/blog/content/images/size/w600/2020/12/10-ways-to-get-data-into-Google-Sheets-2@2x.png"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Free automation using Google Apps Script:
                                    adding SpreadSimple orders into a Google
                                    Sheet.
                                </Card.Title>
                                <Button
                                    variant="primary"
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Know More
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="mb-5">
                        <Card style={{ width: "22rem" }}>
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/blog/content/images/size/w600/2020/12/1_BWUyCSqXFTdiS9P3PLijfA.png"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Free automation using Google Apps Script:
                                    adding SpreadSimple orders into a Google
                                    Sheet.
                                </Card.Title>
                                <Button
                                    variant="primary"
                                    style={{ fontFamily: "Courier New" }}
                                >
                                    Know More
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </Container>
        </>
    );
};

export default Blog;
