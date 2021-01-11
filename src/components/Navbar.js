import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

import { arrSocialMedia, arrRoutesNav } from "../assets/content/nav"
import deltaLeGrandLogo from "../assets/img/brand/delta-le-grand-logo.png";

// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";


export function NavbarLandingPage(props) {
    const [collapseClasses, setCollapseClasses] = useState("");
    const [collapseOpen, setCollapseOpen] = useState(false);

    const withHeadroom = props.headroom;

    useEffect(() => {
      // if the functionnality is enabled
      if(withHeadroom) {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
      }
    }, []);

    return(
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
            >
              <>
                {/*brand */}
                <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                  <img
                    alt="..."
                    src={deltaLeGrandLogo}
                  />
                </NavbarBrand>
                
                {/* routes */}
                <button className="navbar-toggler" id="navbar_global">
                    <span className="navbar-toggler-icon" />
                </button>
                <UncontrolledCollapse
                    toggler="#navbar_global"
                    navbar
                    className={collapseClasses}
                    onExiting={() => setCollapseClasses("collapsing-out")}
                    onExited={() => setCollapseClasses("")}
                    >

                    <div className="navbar-collapse-header">
                      <Row>
                        <Col className="collapse-brand" xs="6">
                          <Link to="/">
                            <img
                              alt="..."
                              src={deltaLeGrandLogo}
                            />
                          </Link>
                        </Col>
                        <Col className="collapse-close" xs="6">
                          <button className="navbar-toggler" id="navbar_global">
                            <span />
                            <span />
                          </button>
                        </Col>
                      </Row>
                    </div>

                    <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                        {arrRoutesNav.map((route, i) => 
                            <NavDetail key={`navbar-landing-page-routes-${i}`} routeDetailObject={route}/>
                        )}
                    </Nav> 

                    {/* social media */}
                    <Nav className="align-items-lg-center ml-lg-auto" navbar>
                        {arrSocialMedia.map((item, i) => 
                            <NavSocialMedia key={`navbar-landing-page-social-media-${i}`} {...item}/>
                        )}
                    </Nav>
                </UncontrolledCollapse>

                
              </>
          </Navbar>
        </header>
    );
}


export function NavDetail(props) {
    const { routeName, arrFeatures} = props.routeDetailObject;

    return(
        <UncontrolledDropdown nav>
            <DropdownToggle nav>
                
                <span className="nav-link-inner--text">{routeName}</span>
            </DropdownToggle>

            <DropdownMenu className="dropdown-menu-xl">
                <div className="dropdown-menu-inner">
                    {arrFeatures.map((feature, i) => {
                        return(
                            <Media
                                tag={Link}
                                key={`nav-item-${routeName}-${i}`}
                                className="d-flex align-items-center"
                                to={feature.href}
                                >
                                {/* icon */}
                                <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                  <i className={feature.iconClassName} />
                                </div>

                                {/* content */}
                                <Media body className="ml-3">
                                    <h6 className="heading text-primary mb-md-1">
                                        {feature.title}
                                    </h6>
                                    <p className="description d-none d-md-inline-block mb-0">
                                        {feature.description}
                                    </p>
                                </Media>
                            </Media>
                        );
                    })}
                </div>    
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}


export function NavSocialMedia(props) {
    const { socialNetwork, iconClassName, description, href } = props;
    const id = `tooltip${socialNetwork}-${Math.floor(Math.random() * 1000)}`;

    return(
        <NavItem>
            <NavLink
              className="nav-link-icon"
              href={href}
              id={id}
              target="_blank"
            >
              <i className={iconClassName} />
              <span className="nav-link-inner--text d-lg-none ml-2">
                {socialNetwork}
              </span>
            </NavLink>
            <UncontrolledTooltip delay={0} target={id}>
              {description}
            </UncontrolledTooltip>
        </NavItem>
    );
}