import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import ButtonLoading from "../ButtonLoading/ButtonLoading";
import "./pricing.css";
import Footer from "../Footer/Footer";

const Pricing = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        event.preventDefault();
        setChecked(event.target.checked);
    };
    return (
        <>
            <Container fluid>
                <Container>
                    <div style={{ marginBottom: "100px" }}>
                        <h1
                            className="text-center"
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                                marginTop: "100px",
                            }}
                        >
                            Pricing
                        </h1>
                        <p
                            style={{
                                fontFamily: "Courier New",
                            }}
                        >
                            Start for free. Pay per website as you grow. You can
                            test drive Pro plan free for a full 7 days (no
                            credit card required).
                        </p>
                        <ButtonLoading
                            checked={checked}
                            handleChange={handleChange}
                        ></ButtonLoading>
                        <container
                            className="main-price"
                            style={{
                                marginTop: "100px",
                            }}
                        >
                            <div>
                                <Card style={{ width: "24rem" }}>
                                    <Card.Body>
                                        <Card.Title
                                            className="text-center"
                                            style={{
                                                fontFamily: "Courier New",
                                                fontWeight: "bold",
                                                marginTop: "50px",
                                                marginBottom: "30px",
                                                fontSize: "3rem",
                                            }}
                                        >
                                            Free
                                        </Card.Title>
                                        <Card.Text className="text-center">
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    fontSize: "2rem",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                $
                                                <span
                                                    style={{
                                                        fontFamily:
                                                            "Courier New",
                                                        fontSize: "3.5rem",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    0
                                                </span>
                                            </span>
                                            <p
                                                className="text-center"
                                                style={{
                                                    fontFamily: "Courier New",
                                                }}
                                            >
                                                Per Website
                                            </p>
                                        </Card.Text>
                                        <div className="details">
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Responsive design
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Light/dark theme
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Search
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Sorting
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Filters
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Pagination
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Content blocks
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Customizable cards
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Instant update with Google
                                                Sheets
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Customizable SpreadSimple
                                                sub-domain
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Header & Navigation
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Content pages (limited)
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Markdown Support
                                            </span>
                                        </div>
                                        <Button
                                            variant="outline-success"
                                            style={{
                                                fontFamily: "Courier New",
                                                marginTop: "20px",
                                            }}
                                        >
                                            SIGN UP NOW
                                        </Button>{" "}
                                    </Card.Body>
                                </Card>
                            </div>

                            {/* pricing system 1 end and pricing system 2 started */}

                            <div>
                                <Card style={{ width: "24rem" }}>
                                    <Card.Body>
                                        <Card.Title
                                            className="text-center"
                                            style={{
                                                fontFamily: "Courier New",
                                                fontWeight: "bold",
                                                marginTop: "50px",
                                                marginBottom: "30px",
                                                fontSize: "3rem",
                                            }}
                                        >
                                            Pro
                                        </Card.Title>
                                        <Card.Text className="text-center">
                                            {checked ? (
                                                <div>
                                                    <span
                                                        style={{
                                                            fontFamily:
                                                                "Courier New",
                                                            fontSize: "2rem",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        $
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "Courier New",
                                                                fontSize:
                                                                    "3.5rem",
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                        >
                                                            13
                                                        </span>
                                                    </span>
                                                </div>
                                            ) : (
                                                <div>
                                                    <span
                                                        style={{
                                                            fontFamily:
                                                                "Courier New",
                                                            fontSize: "2rem",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        $
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "Courier New",
                                                                fontSize:
                                                                    "3.5rem",
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                        >
                                                            16
                                                        </span>
                                                    </span>
                                                </div>
                                            )}

                                            <p
                                                className="text-center"
                                                style={{
                                                    fontFamily: "Courier New",
                                                }}
                                            >
                                                Per Website
                                            </p>
                                        </Card.Text>
                                        <div className="details">
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Responsive design
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Light/dark theme
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Search
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Sorting
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Filters
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Pagination
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Content blocks
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Customizable cards
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Instant update with Google
                                                Sheets
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Customizable SpreadSimple
                                                sub-domain
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Header & Navigation
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Content pages (limited)
                                            </span>
                                            <img src="https://spreadsimple.com/images/list-icon.svg"></img>
                                            <span
                                                style={{
                                                    fontFamily: "Courier New",
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Markdown Support
                                            </span>
                                        </div>
                                        <Button
                                            variant="outline-success"
                                            style={{
                                                fontFamily: "Courier New",
                                                marginTop: "20px",
                                            }}
                                        >
                                            START FREE TRIAL
                                        </Button>{" "}
                                    </Card.Body>
                                </Card>
                            </div>
                        </container>
                    </div>
                </Container>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Pricing;
