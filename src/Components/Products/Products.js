import React from "react";
import { Container, Button } from "react-bootstrap";
import Why from "../Why/Why";
import "./products.css";
const Products = () => {
    return (
        <>
            <Container fluid className="products-main" id="home">
                <Container className="products-details">
                    <div className="products-title">
                        <h1 className="description">
                            A blazing-fast way to create and manage websites
                            using Google Sheets
                        </h1>
                        <p className="description-para lead">
                            SpreadSimple turns your spreadsheet into a styled
                            website with a variety of customizable features. For
                            free.
                        </p>
                        <Button
                            variant="primary"
                            style={{ fontFamily: "Courier New" }}
                        >
                            Try It out
                        </Button>{" "}
                        <Button
                            variant="primary"
                            style={{
                                fontFamily: "Courier New",
                                marginLeft: "30px",
                            }}
                        >
                            watch demo <i class="fab fa-youtube"></i>
                        </Button>
                    </div>
                    <div className="products-title">
                        <h1>
                            <video
                                autoplay="autoplay"
                                loop="loop"
                                muted="muted"
                                playsinline=""
                                src="https://spreadsimple-statics.s3.us-east-2.amazonaws.com/videos/intro-o.mp4"
                                poster="/images/intro-video-poster.jpg"
                                className="intro__video w-100"
                            >
                                <source
                                    src="https://spreadsimple-statics.s3.us-east-2.amazonaws.com/videos/intro-o.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </h1>
                    </div>
                </Container>
            </Container>
            <Why></Why>
        </>
    );
};

export default Products;
