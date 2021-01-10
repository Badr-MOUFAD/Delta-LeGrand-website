import React, { useState } from "react";

// for scrolling
import Scrollspy from 'react-scrollspy'

// reactstrap components
import { Button, Card, Container, Row, Col, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";

// core components
import { NavbarLandingPage } from "components/Navbar";
import { GradientSectionWithCircles } from "components/CoreComponents";
import Footer from "components/Footer";

import { sidebarLinks, contentNacelle } from "assets/content/nacelle";

export default function Nacelle(props) {
    const [activeLink, setActiveLink] = useState("nacelle-schema-cinematique");


    return (
      <>
        <NavbarLandingPage />
        <GradientSectionWithCircles>
            <Container className="shape-container d-flex align-items-center py-lg">
                <div className="col px-0">
                    <Row className="align-items-center justify-content-center">
                        <Col className="text-center" lg="6">
                            <h3 className="display-3 mb-0 text-white">
                                Receuil Des Etudes
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <div className="card-profile-image" style={{ zIndex: 10}}>
                                <div className="icon icon-lg icon-shape icon-shape-white shadow rounded-circle mb-2">
                                    <i className="ni ni-hat-3" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </GradientSectionWithCircles>

        <section className="section">
            <Container>
                <Card className="card-profile shadow mt--300">

                    <Row className="mr-5 ml-5">
                        <Col 
                            className="border-right pt-5 pb-5 sticky-top" 
                            style={{ height: "500px" }} 
                            xs={3}
                            >
                            <Nav vertical>    
                                <NavbarBrand className="mb-3 border-bottom" tag="h3">
                                    <h3 className="text-capitalize"> Nacelle </h3>
                                </NavbarBrand>
                                {sidebarLinks.map((item, i) => {
                                    return(
                                        <NavItem tag="h6" key={`nacelle-sidebar-${i}`}> 
                                            <a 
                                                href={item.href} 
                                                className={((activeLink !== item.href.slice(1)) ? "nav-link" : "nav-link active") + " text-muted"}>
                                                {item.text}
                                            </a> 
                                        </NavItem>
                                    );
                                })}
                            </Nav>
                        </Col>

                        <Col xs={9} className="mt-6">
                            <Scrollspy 
                                items={contentNacelle.map((item) => item.id)} 
                                currentClassName="active" 
                                onUpdate={(e) => setActiveLink(e.id)}
                                >
                                {contentNacelle.map((item, i) => {
                                    return(
                                        <Row 
                                            key={`nacelle-content-${i}`}
                                            id={item.id} 
                                            className="mb-5"
                                            >
                                            <Col xs={8}>
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                                <p>{item.description}</p>
                                                <p>{item.description}</p>
                                                <p>{item.description}</p>
                                                <p>{item.description}</p>
                                            </Col>
                                            <Col 
                                                className="d-flex justify-content-center align-items-center"
                                                xs={4}
                                                >
                                                <p>image here</p>
                                            </Col>
                                        </Row>
                                    );
                                })}
                            </Scrollspy>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>

        <Footer />
      </>
    );
}


export function Sidebar(props) {
    const title = props.title;
    const outlines = props.outlines;

    return(
        <Nav vertical>
            <NavbarBrand className="mb-3 border-bottom" tag="h3">
                <h3 className="text-capitalize">{title}</h3>
            </NavbarBrand>

            <NavItem tag="h6" className="text-primary"> 
               <a href="#55" className="nav-link active text-default">Partie 1</a> 
            </NavItem>
            <NavItem tag="h6">
                <a href="#56" className="text-dark">Partie 1</a> 
            </NavItem>
        </Nav>
    );
}
