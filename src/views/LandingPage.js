import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

import { NavbarLandingPage } from "../components/Navbar";
import { GradientSectionWithCircles } from "../components/CoreComponents";
import Footer from '../components/Footer';


export default function LandingPage(props) {

    return(
        <React.Fragment>
            <NavbarLandingPage />

            <GradientSectionWithCircles>
                <Slogan />
            </GradientSectionWithCircles>
            
            <Footer />
        </React.Fragment>
    );
}


export function Slogan(props) {
    const slogan = "Ce que vous imaginez est désormais à portée de main";
    const linkDowloadSheet = "";
    const linkDowloadInterface = "";

    return(
        <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                    <Col className="text-center" lg="6">
                        {/* Slogan */}
                        <img
                        alt="..."
                        className="img-fluid"
                        src={require("assets/img/brand/argon-react-white.png")}
                        style={{ width: "200px" }}
                        />
                        <p className="lead text-white">
                            {slogan}
                        </p>
                        <div className="btn-wrapper mt-5">

                        {/* Downloads */}
                        <Button
                            className="btn-white btn-icon mb-3 mb-sm-0"
                            color="default"
                            href={linkDowloadSheet}
                            size="lg"
                            >
                            <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                            </span>
                            <span className="btn-inner--text">Fiche technique</span>
                        </Button>{" "}
                        <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="github"
                            href={linkDowloadInterface}
                            size="lg"
                            target="_blank"
                            >
                            <span className="btn-inner--icon mr-1">
                                <i className="ni ni-cloud-download-95" />
                            </span>
                            <span className="btn-inner--text">
                                <span>Interface Graphique</span>
                            </span>
                        </Button>
                        </div>

                        {/* signature */}
                        <div className="mt-5">
                            <small className="text-white font-weight-bold mb-0 mr-2">
                                made by passion <strong className="ml-3">Team Delta Le Grand</strong>
                            </small>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}