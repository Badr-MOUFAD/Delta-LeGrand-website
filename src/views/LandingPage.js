import React, { useState } from "react";

import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col, Badge, Card, CardImg, CardBody, Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption  } from "reactstrap";

// animating the content
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { NavbarLandingPage } from "../components/Navbar";
import { GradientSectionWithCircles, SvgSeperator } from "../components/CoreComponents";
import Footer from '../components/Footer';

import { teamMembers } from '../assets/content/team';

import plateauImage from "assets/img/theme/img-1-1200x1000.jpg";
import robotImage from "assets/img/theme/delta-photo.jpeg";
import InterfaceSVG from "assets/img/ill/ill-2.svg";
import deltaLogo from 'assets/img/brand/delta-logo-3.png';

import { plateauPhotos, interfacePhotos } from "../assets/content/carouselContent";


export default function LandingPage(props) {

    return(
        <React.Fragment>
            <NavbarLandingPage headroom={true}/>

            <GradientSectionWithCircles>
                <Slogan />
            </GradientSectionWithCircles>

            <ProductDescription />
            <Fade>
              <ImpressionDescription />
            </Fade>

            <Fade>
              <PlateauDescription />
            </Fade>
            
            <Fade>
              <InterfaceDescription />
            </Fade>

            <Fade>
              <TeamMembers />
            </Fade>

            <Footer />
        </React.Fragment>
    );
}


export function Slogan(props) {
    const slogan = (
      <span>
        <Slide left>Ce que vous imaginez est désormais à portée de main</Slide> <br />
        <Slide right>Imaginez, Modélisez et Imprimez</Slide>
      </span>
      );
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
                          src={deltaLogo}
                          style={{ width: "200px" }}
                        />
                        <p className="lead text-white">
                            {slogan}
                        </p>
                        <div className="btn-wrapper mt-5">

                        {/* Downloads */}
                        <Row className="d-flex justify-content-center align-items-center">
                          <Fade bottom>
                          <Button
                              className="btn-white btn-icon mb-3 mb-sm-0 mr-sm-3"
                              color="default"
                              href={linkDowloadSheet}
                              size="lg"
                              tag={Link}
                              to="/tech-sheet"
                              >
                              <span className="btn-inner--icon mr-1">
                                <i className="fa fa-list-ul" />
                              </span>
                              <span className="btn-inner--text">Fiche technique</span>
                          </Button>{" "}
                        </Fade>
                        <Fade bottom>
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
                        </Fade>   
                        </Row> 
                        </div>

                        {/* signature */}
                        <Fade bottom>
                          <div className="mt-5">
                              <small className="text-white font-weight-bold mb-0 mr-2">
                                  made by passion <strong className="ml-3">Team Delta Le Grand</strong>
                              </small>
                          </div>
                        </Fade>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}


export function ProductDescription(props) {
    const product = {
        title: "Delta Le Grand",
        description: (
          <span>
              Delta le Grand est une impriment 3D colossale adaptée pour imprimer des pièces aussi bien petite que grande. <br /> <br />
              Il est doté d’une nacelle pouvant confectionner avec finesse des objets soit en plastique soit en céramique.<br />
              Il est aussi muni d’un plateau mobile capable non seulement de translater verticalement mais aussi de s’incliner dans toutes les directions offrant ainsi une meilleure adaptabilité et mobilité. <br /> <br />
              Delta le Grand dispose notamment de sa propre interface de commande, ergonomique et spécialement conçue pour mettre en œuvre toutes ses fonctionnalités. 
          </span>),
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
                    className="img-fluid floating rounded border shadow"
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
                    <Fade bottom>
                      <p>
                          {product.description}
                      </p>
                    </Fade>

                    {/* features */}
                    <ul className="list-unstyled mt-3">
                      {product.features.map((feature, i) => {
                          return(
                            <li key={`landing-page-feature-${i}`} className="py-3">
                                <Fade bottom>
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
                                </Fade>
                            </li>
                          );
                      })}
                    </ul>
                  </div>
                </Col>
              </Row>
              {/* <Row className="d-flex justify-content-center row-grid align-items-center">
                <Col xs="1">
                  <i className="fa fa-arrow-down fa-5x"></i>
                </Col>
              </Row> */}
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
                      L’impression des objets se fait par une nacelle susceptible de se déplacer dans un espace de travail cylindrique de diamètre 80cm et de hauteur 120cm. <br />
                      Elle est munie d’un outillage permettant de confectionner des objets soit en plastique soit en céramique.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <Fade bottom>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="fa fa-pencil text-primary"></i>
                    </div>
                    <h5 className="mt-3">Précision</h5>
                    <p className="mt-3">
                      grâce au pas fin des moteurs combiné avec le pas des glissières, <br />
                      la nacelle peut atteindre une précision allons jusqu’à 0.1 mm
                    </p>
                  </Fade>
                </Col>
                <Col lg="4">
                  <Fade bottom>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="fa fa-product-hunt text-primary" />
                    </div>
                    <h5 className="mt-3">Filament PLA</h5>
                    <p className="mt-3">
                      l’extrudeuse de plastique est alimentée par une bobine de filament PLA. <br />
                      Elle est principalement dédiée à des petits objets en raison de sa fine tête
                    </p>
                  </Fade>
                </Col>
                <Col lg="4">
                  <Fade bottom>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="fa fa-certificate text-primary"/>
                    </div>
                    <h5 className="mt-3">Céramique</h5>
                    <p className="mt-3">
                      L’extrudeuse de céramique est alimentée par un réservoir rempli de Clay. <br />
                      Elle est adaptée à l’impression des objets de grandes tailles
                    </p>
                  </Fade>
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
                <Fade bottom>
                <Card className="bg-warning shadow border-0">

                  <CustomCarousel photos={plateauPhotos} />

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
                      Design du plateau
                    </h4>
                    <p className="lead text-italic text-white">
                      Un squelette en forme « Y » couvert d’une fine plaque en aluminium délimitant l’espace de travail. <br />
                      Ce design ingénieur est spécialement choisi de sorte à allégier au maximum le plateau et ainsi augmenter d’avantage la charge qu’il peut supporter.
                    </p>
                  </blockquote>
                </Card>
                </Fade>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="ni ni-planet" />
                  </div>
                  <h3>Plateau inclinable</h3>
                  <p className="lead">
                    L’avantage exclusive de Delta Le Grand c’est qu’il est doté d’un plateau mobile qui peut non seulement translater
                    verticalement mais aussi effectuer des inclinaisons de 15 degrés dans toutes les directions. 
                  </p>
                  <p>
                    Grace à cette fonctionnalité de base, il est possible d’imprimer des formes complexes 
                    sans avoir besoin de supports pour empêcher la matière de s’effondrer.<br /> En effet, 
                    le plateau s’incline et exploite ainsi la gravité pour maintenir l’équilibre de la pièce en cours d’impression
                  </p>
                  <p className="mb-5">
                    L’inclinaison du plateau offre notamment une meilleure adaptation au surface irrégulière. <br/>
                    A ce propos, il est possible de graver sur un large champ de type de surface
                    allons des surfaces planes et inclinées jusqu’aux surfaces courbées. 
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
                   {/*  <CustomCarousel photos={interfacePhotos}/> */}
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
                        Delta le Grand est commandé via une interface graphique simple et intuitive. 
                        Elle se présente sous forme d’une application Desktop développé en utilisant 
                        les UI Web Technologies.
                      </p>
                    </div>
                  </div>
                  <Fade bottom>
                    <Card className="shadow shadow-lg--hover mt-5">
                      <CardBody>
                        <div className="d-flex">
                          <div>
                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                              <i className="fa fa-code" />
                            </div>
                          </div>
                          <div className="pl-4">
                            <h5 className="title text-success">
                              Développent
                            </h5>
                            <p>
                              L’utilisation des UI web technologies dans notre cas le Framework React et Material-UI <br/>
                              donne accès aux avantages offerts par le Web à savoir fluidité, animation et meilleure expérience utilisateur
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Fade>
                  <Fade bottom>
                    <Card className="shadow shadow-lg--hover mt-5">
                      <CardBody>
                        <div className="d-flex">
                          <div>
                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                              <i className="fa fa-list-alt" />
                            </div>
                          </div>
                          <div className="pl-4">
                            <h5 className="title text-success">
                              Mode d'utilisation
                            </h5>
                            <p>
                              <strong>Mode manuel</strong> dans lequel il est possible de commander soit indépendamment la nacelle et le plateau soit simultanément.<br />
                              <strong>Mode automatique</strong> dans lequel il est possible de charger un fichier .csv et exécuter automatiquement les commandes qui y sont dedans.
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Fade>
                  <Fade bottom>
                    <Card className="shadow shadow-lg--hover mt-5">
                      <CardBody>
                        <div className="d-flex">
                          <div>
                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                              <i className="fa fa-expand" />
                            </div>
                          </div>
                          <div className="pl-4">
                            <h5 className="title text-success">
                              Cross-plateform
                            </h5>
                            <p>
                              L'interface est adapté aussi bien pour les machines Windows que les machines Mac
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
                  </Fade>
                </Col>
              </Row>
            </Container>

            {/* SVG separator */}
            <SvgSeperator />

            <Fade bottom>
              <Row className="d-flex justify-content-center align-items-center mt-5">
                <Col xs="12" className="my-5"> 
                  <h2 className="text-white text-center">
                    <i className="fa fa-eye icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mr-5"></i>
                    Un aperçu sur l'interface
                  </h2>
                </Col>
                <Col xs="12">
                  <CustomCarousel photos={interfacePhotos}/>
                </Col>
              </Row>
            </Fade>
          </section>
    );
}

export function TeamMembers(props) {
    const description = (
     <span>
        Nous sommes une équipe de 10 étudiants ingénieurs créatifs, avides d’innovation, persévérants et prêts à entreprendre <br />
        « <strong>Le travail de groupe</strong> » est notre emblème solennel
     </span> 
    );

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

            <Row className="d-flex justify-content-center">
                {teamMembers.map((member, i) => {
                    return(
                        <Col key={`anding-page-team-member-${i}`} className="mb-5" xs="6" lg="3" md="6">
                          <Fade bottom>
                            <div className="px-4">
                                <img
                                    alt="..."
                                    className="rounded img-center img-fluid shadow shadow-lg--hover"
                                    src={member.image}
                                    style={{ width: "300px", height: "150px" }}
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


export function CustomCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = props.photos;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="rounded img-center border shadow" src={item.src} alt={item.altText} width={500} height={350}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}
