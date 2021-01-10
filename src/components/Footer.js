import React from "react";

// reactstrap components
import { Button, NavItem, NavLink, Nav, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import { NavSocialMedia } from "./Navbar";
import { arrSocialMedia } from "../assets/content/nav";


export default function functionFooter (props) {

    return (
      <React.Fragment>
        <footer className="footer mt-5">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
                <Col lg="6">
                    <h3 className=" text-primary font-weight-light mb-2">
                      Team Delta Le Grand vous salue !
                    </h3>
                    <h4 className=" mb-0 font-weight-light">
                      N'hésiter pas à nous suivre
                    </h4>
                </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href=""
                    target="_blank"
                  >
                    Team Delta Le Grand
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                    {arrSocialMedia.map((item, i) => 
                        <NavSocialMedia key={`navbar-footer-social-media-${i}`} {...item}/>
                    )}
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );

}
