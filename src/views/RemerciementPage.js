import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Badge, Card, CardImg, CardBody } from "reactstrap";

// animating the content
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { NavbarLandingPage } from "../components/Navbar";
import { GradientSectionWithCircles, SvgSeperator } from "../components/CoreComponents";
import Footer from '../components/Footer';

import { institution, supervisors } from "../assets/content/remerciement";



export default function RemerciementPage(props) {

    return(
        <React.Fragment>
            <NavbarLandingPage />

            <GradientSectionWithCircles>
                <Fade bottom>
                    <MotDeRemerciement />
                </Fade>
            </GradientSectionWithCircles>

            <Fade bottom>
                <Members
                    arr={supervisors}
                    title="En particulier :"
                    description="Nous remercions le corps professoral"
                    />
            </Fade>

            <Fade bottom>
                <Members
                    arr={institution}
                    title="Et notamment :"
                    description="Nous sommes reconnaissants envers les institutions qui nous ont fourni l’infrastructure, le matériel et le personnel idoine"
                    />
            </Fade>

            <Fade bottom>
                <VideoPub />   
            </Fade>

            <Footer isSimple={true}/>
        </React.Fragment>
    );
}


export function MotDeRemerciement(props) {

    return(
        <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                    <Col className="text-center" xs={12}>
                        <h3 className="display-3 mb-0 text-white">
                            <div className="icon icon-lg icon-shape icon-shape-white shadow rounded-circle mb-2 mr-4">
                                <i className="fa fa-gift" />
                            </div>
                            Remerciements
                        </h3>
                    </Col>

                    <Col className="text-center" xs={12}>
                        <p className="lead text-white">
                            <h4 className="font-weight-bold">Team Delta Le Grand</h4>
                            tient à exprimer sa chaleureuse et sincère gratitude <br />
                            envers tout un chacun ayant contribué de près ou de loin <br/>
                            à la concrétisation de ce projet
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}


export function Members(props) {
    const title = props.title;
    const description = props.description;
    const arr = props.arr;

    return(
        <Container className="my-5">
            <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">{title}</h2>
                  <p className="lead text-muted">
                    {description}
                  </p>
                </Col>
            </Row>

            <Row className="d-flex justify-content-center">
                {arr.map((member, i) => {
                    return(
                        <Col key={`${title}-member-${i}`} className="mb-5" xs="6" lg="3" md="6">
                          <Fade bottom>
                            <div className="px-4">
                                <img
                                    alt="..."
                                    className="rounded img-center img-fluid shadow shadow-lg--hover"
                                    src={member.image}
                                    style={{ height: "150px" }}
                                    />
                                <div className="pt-4 text-center">
                                    <h6 className="title">
                                      <span className="d-block mb-1">{member.name}</span>
                                      <small className="h6 text-muted">{member.title}</small>
                                    </h6>
                                </div>
                            </div>
                          </Fade>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}


export function VideoPub(props) {

    return(
        <Container>
            <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Notre Teaser :</h2>
                  <p className="lead text-muted">
                    Curieux de savoir plus sur les membres du groupe ainsi que le déroulement du projet ? <br /> <br />
                    La vidéo suivante présente de manière "fun" et amusante le cadre du projet ainsi que les membres du groupe
                  </p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <iframe src={"https://www.youtube.com/embed/xm9Vxo79jWs"} width="700" height="500"></iframe>
                </Col>
            </Row>
        </Container>
    );
}