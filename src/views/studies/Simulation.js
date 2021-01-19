import React, { useState } from "react";

// for scrolling
import Scrollspy from 'react-scrollspy'

// reactstrap components
import {Card, Container, Row, Col, Nav, NavItem, NavbarBrand, Collapse } from "reactstrap";

// core components
import { NavbarLandingPage } from "components/Navbar";
import { GradientSectionWithCircles } from "components/CoreComponents";
import Footer from "components/Footer";

import { sidebarLinks, content } from "assets/content/simulation";


export default function Simulation(props) {
    const [activeLink, setActiveLink] = useState("nacelle-schema-cinematique");
    const [openOutlines, setOpenOutlines] = useState(true);

    const routeHeader = {
        iconClassName: "ni ni-hat-3",
        title: "Receuil Des Etudes"
    }

    const sectionTitle = "Simulation Des Efforts";


    return (
      <>
        <NavbarLandingPage />
        <GradientSectionWithCircles>
            <Container className="shape-container d-flex align-items-center py-lg">
                <div className="col px-0">
                    <Row className="align-items-center justify-content-center">
                        <Col className="text-center" lg="6">
                            <h3 className="display-3 mb-0 text-white">
                                <div className="icon icon-lg icon-shape icon-shape-white shadow rounded-circle mb-2 mr-4">
                                    <i className={routeHeader.iconClassName} />
                                </div>
                                {routeHeader.title}
                            </h3>
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
                            className="lg-border-right pt-5 pb-5 sticky-top bg-white" 
                            style={{ height: "300px", zIndex: "10"}} 
                            xs={12}
                            lg={3}
                            >
                            <Nav vertical>    
                                <NavbarBrand 
                                    className="mb-3 border-bottom" 
                                    tag="h3"
                                    onClick={() => setOpenOutlines(!openOutlines)}
                                    >
                                    <h3 className="text-capitalize">
                                         Simulation <br/> Des Efforts 
                                    </h3>
                                </NavbarBrand>

                                <Collapse isOpen={openOutlines}>
                                    {sidebarLinks.map((item, i) => {
                                        return(
                                            <NavItem tag="h6" key={`nacelle-sidebar-${i}`}> 
                                                <a 
                                                    href={item.href} 
                                                    className={((activeLink !== item.href.slice(1)) ? "nav-link" : "nav-link active-sidebar") + " text-muted"}
                                                    >
                                                    {item.text}
                                                </a> 
                                            </NavItem>
                                        );
                                    })}
                                </Collapse>
                            </Nav>
                        </Col>

                        <Col xs={12} lg={9} className="mt-6">
                            <Scrollspy 
                                items={content.map((item) => item.id)} 
                                currentClassName="active" 
                                onUpdate={(e) => { 
                                    if(e) {
                                        setActiveLink(e.id)
                                    }
                                }}
                                >
                                {content.map((item, i) => {
                                    return(
                                        <Row 
                                            key={`nacelle-content-${i}`}
                                            id={item.id} 
                                            className="mb-5"
                                            >
                                            <Col xs={12} lg={8}>
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                                <p>{item.description}</p>
                                                <p>{item.description}</p>
                                                <p>{item.description}</p>
                                                <p>{item.description}</p>
                                            </Col>
                                            <Col 
                                                className="d-flex justify-content-center align-items-center"
                                                xs={12} lg={4}
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

        <Footer isSimple={true}/>
      </>
    );
}
