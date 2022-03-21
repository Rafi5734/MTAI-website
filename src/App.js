import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./Components/Products/Products";
import Templates from "./Components/Templates/Templates";
import ShowCase from "./Components/ShowCase/ShowCase";
import Pricing from "./Components/Pricing/Pricing";
import Blog from "./Components/Blog/Blog";
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
    Button,
} from "react-bootstrap";
import Logo from "./Components/Images/dark_logo_transparent_background.png";
function App() {
    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Link to="/products">
                        <Navbar.Brand>
                            <img
                                src={Logo}
                                className="img-fluid nav-logo"
                                alt="nav-logo"
                            ></img>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Link to="/products" className="links me-5">
                                Product
                            </Link>
                            <Link to="/templates" className="links me-5">
                                Templates
                            </Link>
                            <Link to="/showcase" className="links me-5">
                                Showcase
                            </Link>
                            <Link to="/pricing" className="links me-5">
                                Pricing
                            </Link>
                            <Link to="/blog" className="links me-5">
                                Blog
                            </Link>
                            {/* <Link to="/help" className="links me-5">
                                Help
                            </Link> */}
                        </Nav>

                        <Button variant="outline-success" className="nav-btn">
                            Get Started
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<Products />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/showcase" element={<ShowCase />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
