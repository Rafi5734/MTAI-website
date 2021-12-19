import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import Connect from "../Connect/Connect";
import "./useCases.css";
const UseCases = () => {
    return (
        <>
            <Container fluid className="feature-main">
                <div>
                    <h1
                        className="text-center"
                        style={{
                            fontFamily: "Courier New",
                            fontWeight: "bold",
                            position: "relative",
                            top: "100px",
                        }}
                    >
                        Our Features
                    </h1>
                </div>

                <Container
                    className="feature-all-col"
                    style={{ marginTop: "200px" }}
                >
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/data.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Always up-to-date & Easy to manage data
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/order.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Order form
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/themes.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Different themes
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/flexible-content.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Flexible content representation
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/content-blocks.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Content blocks
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/ssl-support.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    HTTPS/SSL support
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/google-analytics.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    SEO: meta tags, favicon, preview image
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/mobile-friendly.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Mobile friendly
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/filters.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Add Google Analytics, chats and other
                                    scripts
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/widget.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Embed as widget to external website
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/item-details.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Item details page
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/embed-popup.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Open any embedded service in popup
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/webhooks.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Custom integrations (Webhooks)
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="feature-card1 mb-4">
                        <Card
                            style={{
                                width: "18rem",
                                border: "none",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://spreadsimple.com/images/features-section/paypal.svg"
                                className="img-fluid w-25 ms-auto me-auto mt-5"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: "Courier New",
                                        fontWeight: "bold",
                                    }}
                                >
                                    PayPal
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </Container>
            <Connect></Connect>
        </>
    );
};

export default UseCases;
