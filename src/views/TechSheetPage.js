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
                                { /* chiffres clés */}
                                <ChiffreCleTable />

                                <ElectricTable />

                                <MechanicTable />
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>

            <Footer isSimple={true}/>
        </React.Fragment>
    );
}


export function ChiffreCleTable(props) {

    return(
        <div className="my-5 mx-lg-5">
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
        </div>
    );
}


export function ElectricTable(props) {

    return(
        <div className="my-5 mx-lg-5">
            <h4>
                <i className="fa fa-plug mr-3"></i>
                Matériels électriques
            </h4>
           <Row className=" d-flex align-items-center justify-content-center">
                <Col className="table-responsive" xs="12">
                    <table className="table ">
                        <thead className="table-primary">
                            <tr>
                                <th> # </th> <th>Nombre </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://www.geeetech.com/wiki/index.php/MK8_Extruder" target="_blank" className="mr-2">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                    Extrudeuse
                                </td> 
                                <td>1</td>
                            </tr>

                            <tr>
                                <td>
                                    <a href="https://document.technique-achat.com/Robotique/NEMA23/Documentation_Technique_MPP_NEMA_23.pdf" target="_blank" className="mr-2">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                    Moteur pas à pas
                                </td> 
                                <td>12</td>
                            </tr>

                            <tr>
                                <td>
                                    <a href="https://robokits.co.in/motor-drives-drivers/stepper-motor-driver/tb6560-three-axis-stepper-motor-driver-cnc-mach3-driver" target="_blank" className="mr-2">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                    Driver (TB6560)
                                </td> 
                                <td>2</td>
                            </tr>

                            <tr>
                                <td>
                                    <a href="https://www.pololu.com/product/1182" target="_blank" className="mr-2">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                    Driver (A4988)
                                </td> 
                                <td>1</td>
                            </tr>

                            <tr>
                                <td>
                                    <a href="#" target="_blank" className="mr-2">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                    Capteur fin de course
                                </td> 
                                <td>6</td>
                            </tr>

                            <tr>
                                <td>
                                    <a href="https://www.indiamart.com/proddetail/arduino-mega-2560-with-usb-cable-14768163197.html" target="_blank" className="mr-2">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                    Arduino Mega 2560
                                </td> 
                                <td>1</td>
                            </tr>

                            <tr>
                                <td>
                                    <a href="https://www.indiamart.com/proddetail/arduino-mega-2560-with-usb-cable-14768163197.html" target="_blank" className="mr-2">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                    Alimentation 
                                </td> 
                                <td>2</td>
                            </tr>

                        </tbody>
                    </table>
                </Col>
            </Row>
        </div>
    );
}


export function MechanicTable(props) {

    return(
        <div className="my-5 mx-lg-5">
            <h4>
                <i className="fa fa-cogs mr-3"></i>
                Matériels mécaniques
            </h4>
           <Row className=" d-flex align-items-center justify-content-center">
                <Col className="table-responsive" xs="12">
                    <table className="table ">
                        <thead className="table-primary">
                            <tr>
                                <th> # </th> <th>Nombre </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <a href="#" target="_blank" className="mr-2">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                    Glissière
                                </td> 
                                <td>6</td>
                            </tr>

                            <tr>
                                <td>
                                    <a href="#" target="_blank" className="mr-2">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                    Rotule et cage rotule
                                </td> 
                                <td>12</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </div>
    );
}