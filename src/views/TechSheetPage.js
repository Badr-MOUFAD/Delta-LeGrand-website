import React, { useState } from "react";

// reactstrap components
import { Card, Container, Row, Col, Nav, NavItem, NavbarBrand, Collapse } from "reactstrap";

// core components
import { NavbarLandingPage } from "components/Navbar";
import { GradientSectionWithCircles } from "components/CoreComponents";
import Footer from "components/Footer";


export default function TechSheet(props) {

    return(
        <React.Fragment>
            <NavbarLandingPage />
            <GradientSectionWithCircles>
                <Container className="shape-container d-flex align-items-center py-lg">
                    <div className="col px-0">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center" lg="6">
                                <h3 className="display-3 mb-0 text-white">
                                    <div className="icon icon-lg icon-shape icon-shape-white shadow rounded-circle mb-2 mr-4">
                                        <i className="fa fa-list-alt" />
                                    </div>
                                    Fiche Technique
                                </h3>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </GradientSectionWithCircles>

            <section className="section">
                <Container>
                    <Card className="card-profile shadow mt--300 p-5">
                        <Row >
                            <Col xs="12">
                                <h4>
                                    <i className="fa fa-key mr-3"></i>
                                    Chiffre clés 
                                </h4>
                               <Row className=" d-flex align-items-center justify-content-center">
                                    <Col className="table-responsive" xs="12">
                                    <table className="table ">
                                        <thead className="table-primary">
                                            <tr>
                                                <th> # </th> <th>Nacelle</th> <th>Plateau</th>
                                            </tr>
                                        </thead>
        
                                        <tbody>
                                            <tr>
                                                <td>Espace de travail</td> 
                                                <td>Cylindrique <br /> 80cmx120cm</td>
                                                <td>15 degrés d'inclinaison <br /> sur 360 degré</td>
                                            </tr>
        
                                            <tr>
                                                <td>Précision</td> 
                                                <td>0.1mm</td>
                                                <td>1 degré</td>
                                            </tr>
        
                                            <tr>
                                                <td>Charge maximale</td> 
                                                <td> - </td>
                                                <td>10 kg</td>
                                            </tr>
                                        </tbody>
                                </table>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section> 
        </React.Fragment>
    );
}