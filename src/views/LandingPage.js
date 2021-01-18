import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Badge, Card, CardImg, CardBody } from "reactstrap";

import { NavbarLandingPage } from "../components/Navbar";
import { GradientSectionWithCircles, SvgSeperator } from "../components/CoreComponents";
import Footer from '../components/Footer';

import { teamMembers } from '../assets/content/team';

import plateauImage from "assets/img/theme/img-1-1200x1000.jpg";
import robotImage from "assets/img/theme/promo-1.png";
import InterfaceSVG from "assets/img/ill/ill-2.svg";


export default function LandingPage(props) {

    return(
        <React.Fragment>
            <NavbarLandingPage headroom={true}/>

            <GradientSectionWithCircles>
                <Slogan />
            </GradientSectionWithCircles>

            <ProductDescription />
            <ImpressionDescription />
            <PlateauDescription />
            <InterfaceDescription />

            <TeamMembers />

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


export function ProductDescription(props) {
    const product = {
        title: "Delta Le Grand",
        description: "Ici Ici Ici Ici Ici Ici Ici Ici Ici Ici Ici\
                        une une une  une  une  une  une  une  une  une \
                        description description description description description\
                        succinte succinte succinte succinte succinte succinte succinte succinte succinte \
                        Du Du Du Du Du Du Du Du Du Du Du Du Du Du v Du Du Du \
                        Robot Robot Robot Robot Robot Robot Robot Robot Robot",
        features: [
            {
                description: <span><strong>Impression 3D</strong><br/>avec une précision résonable</span>,
                iconClassName: "ni ni-ruler-pencil"
            },
            {
                description: <span><strong>Plateau inlcinable</strong><br/>pour une meilleur adaptation</span>,
                iconClassName: "ni ni-planet"
            },
            {
                description: <span><strong>Interface de commande</strong><br/> intuitive et très ergonomique</span>,
                iconClassName: "ni ni-tv-2"
            },
        ]
    }

    return(
        <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={robotImage}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-bulb-61" />
                    </div>

                    {/* Description of the product */}
                    <h3>{product.title}</h3>
                    <p>
                        {product.description}
                    </p>

                    {/* features */}
                    <ul className="list-unstyled mt-3">
                      {product.features.map((feature, i) => {
                          return(
                            <li key={`landing-page-feature-${i}`} className="py-3">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <Badge className="badge-circle mr-3" color="primary">
                                      <i className={feature.iconClassName} />
                                    </Badge>
                                  </div>
                                  <div>
                                    <h6 className="mb-0">
                                      {feature.description}
                                    </h6>
                                  </div>
                                </div>
                            </li>
                          );
                      })}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
    );
}


export function ImpressionDescription(props) {
  

  return(
    <section className="section section-lg bg-gradient-neutral">
            <Container className="pt-lg pb-100">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3">Impression 3D</h2>
                  <p className="lead">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-pencil text-primary"></i>
                  </div>
                  <h5 className="mt-3">Précision</h5>
                  <p className="mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-product-hunt text-primary" />
                  </div>
                  <h5 className="mt-3">Filament PLA</h5>
                  <p className="mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-certificate text-primary"/>
                  </div>
                  <h5 className="mt-3">Céramique</h5>
                  <p className="mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row>
            </Container>
            <SvgSeperator />
          </section>
  );
}


export function PlateauDescription(props) {

    return(
        <section className="section bg-secondary mb-5">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-warning shadow border-0">
                  <CardImg
                    alt="..."
                    src={plateauImage}
                    top
                  />
                  <blockquote className="card-blockquote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-bg"
                      preserveAspectRatio="none"
                      viewBox="0 0 583 95"
                    >
                      <polygon
                        className="fill-warning"
                        points="0,52 583,95 0,95"
                      />
                      <polygon
                        className="fill-warning"
                        opacity=".2"
                        points="0,42 583,95 683,0 0,95"
                      />
                    </svg>
                    <h4 className="display-3 font-weight-bold text-white">
                      Design System
                    </h4>
                    <p className="lead text-italic text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="ni ni-planet" />
                  </div>
                  <h3>Plateau inclinable</h3>
                  <p className="lead">
                    Don't let your uses guess by attaching tooltips and
                    popoves to any element. Just make sure you enable them
                    first via JavaScript.
                  </p>
                  <p>
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <p className="mb-5">
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <a
                    className="font-weight-bold text-warning text-center mt-5"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    Explorer en détail la solution mécanique 
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    );
}


export function InterfaceDescription(props) {

    return(
        <section className="section pb-0 bg-gradient-warning" style={{ marginBottom: "200px"}}>
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={InterfaceSVG}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-tv-2 text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Interface Intuitive</h4>
                      <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            Télécharger
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <SvgSeperator />
          </section>
    );
}

export function TeamMembers(props) {
    const description = "According to the National Oceanic and Atmospheric\
                        Administration, Ted, Scambos, NSIDClead scentist, puts the\
                        potentially record maximum.";

    return(
        <Container className="my-5">
            <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Team Delta Le Grand</h2>
                  <p className="lead text-muted">
                    {description}
                  </p>
                </Col>
            </Row>

            <Row>
                {teamMembers.map((member, i) => {
                    return(
                        <Col key={`anding-page-team-member-${i}`} className="mb-5" xs="6" lg="3" md="6">
                            <div className="px-4">
                                <img
                                    alt="..."
                                    className="rounded img-center img-fluid shadow shadow-lg--hover"
                                    src={member.image}
                                    style={{ width: "300px" }}
                                    />
                                <div className="pt-4 text-center">
                                    <h6 className="title">
                                      <span className="d-block mb-1">{member.name}</span>
                                      <small className="h6 text-muted">{member.title}</small>
                                    </h6>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
