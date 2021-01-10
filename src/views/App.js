import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// reactstrap components
import { Container, Row } from "reactstrap";

//
import LandingPage from "./LandingPage";
import Nacelle from "./studies/Nacelle";


export default function Index(props) {

  return(
    <React.Fragment>  
      <Switch>
        <Route 
          exact  path="/landing-page" 
          render={() => <LandingPage />}
          />  
        <Route 
          exact path="/technical-sheet" 
          render={() => <h1> Hello </h1>}
          />
        <Route 
          exact path="/our-studies" 
          render={() => <h1> Hello </h1>}
          />
        <Route 
          exact path="/studies-nacelle" 
          render={() => <Nacelle />}
          />

        <Redirect to="/studies-nacelle"/>
      </Switch>
    </React.Fragment>
  );
}
