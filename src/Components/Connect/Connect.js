import React from "react";
import { Container, Button, ProgressBar } from "react-bootstrap";
import MoreInfo from "../MoreInfo/MoreInfo";
import "./connect.css";
const Connect = () => {
    return (
        <>
            <Container fluid className="connect-main">
                <Container
                    className="connect"
                    style={{ position: "relative", top: "150px" }}
                >
                    <div>
                        <h1
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            Connect the tools you use
                        </h1>
                        <p style={{ fontFamily: "Courier New" }}>
                            Take your website to the next level by connecting
                            chats, analytics, payment getaways, automation
                            tools, and adding content from your favorite
                            platforms. The number of available integrations is
                            constantly growing
                        </p>
                        <Button variant="outline-info">Explore Add-on</Button>{" "}
                    </div>
                    <div className="connect-progress">
                        <h1
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                                marginRight: "auto",
                                marginLeft: "auto",
                            }}
                        >
                            Improve Your Innovate
                        </h1>
                        <p style={{ fontFamily: "Courier New" }}>
                            Nor is there anyone who loves or pursues or desires
                            to obtain pain of itself, because it is pain, but
                            occasionally circumstances occur in which toil and
                            pain can procure him some great pleasure. Creation
                            timelines for the digital consulting business theme
                            2021 standard.
                        </p>
                        <p
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            Analytics
                        </p>
                        <ProgressBar
                            animated
                            now={92}
                            label={`92%`}
                            className="mb-4"
                        />
                        <p
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                            }}
                        >
                            Development
                        </p>
                        <ProgressBar
                            variant="success"
                            animated
                            now={80}
                            label={`80%`}
                        />
                        <p
                            style={{
                                fontFamily: "Courier New",
                                fontWeight: "bold",
                                marginTop: "30px",
                            }}
                        >
                            Solutions
                        </p>
                        <ProgressBar
                            variant="info"
                            animated
                            now={95}
                            label={`95%`}
                        />
                    </div>
                </Container>
            </Container>
            <MoreInfo></MoreInfo>
        </>
    );
};

export default Connect;
