import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// reactstrap components
import { Container, Row } from "reactstrap";

//
import LandingPage from "./LandingPage";
import RemerciementPage from "./RemerciementPage";
import Nacelle from "./studies/Nacelle";
import Plateau from "./studies/Plateau";
import Simulation from "./studies/Simulation";
import TechSheetPage from "./TechSheetPage";


export default function Index(props) {

  return(
    <React.Fragment>  
      <Switch>
        {/* page d'aceuil */}
        <Route 
          exact  path="/" 
          render={() => <LandingPage />}
          />
           
        <Route 
          exact  path="/landing-page" 
          render={() => <LandingPage />}
          /> 
        
        {/* Fiche technique */}
        <Route 
          exact path="/tech-sheet" 
          render={() => <TechSheetPage />}
          />

        { /* nos études */}
        <Route 
          exact path="/studies-nacelle" 
          render={() => <Nacelle />}
          />

        <Route 
          exact path="/studies-plateau" 
          render={() => <Plateau />}
          />

        <Route 
          exact path="/studies-simulation" 
          render={() => <Simulation />}
          />

        {/* Remerciement */}
        <Route
          exact="/remerciement-page"
          render={() => <RemerciementPage />}
          />

        <Redirect to="/landing-page"/>
      </Switch>
    </React.Fragment>
  );
}
