import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import React from "react";
import PageNotFound from "./components/PageNotFound";
import AboutUs from "./components/AboutUs";
import SuppliersPage from "./components/SuppliersPage";
import BusinessesPage from "./components/BusinessesPage";
import ResourcesCenterPage from "./components/ResourcesCenter";
import PricingPage from "./components/PricingPage";
import CustomAppBar from "./components/CustomAppBar";
import HowItWorksPage from "./components/HowItWorks";
import PartnersPage from "./components/Partners";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <CustomAppBar />
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/suppliers">
            <SuppliersPage />
          </Route>
          <Route path="/pricing">
            <PricingPage />
          </Route>
          <Route path="/businesses">
            <BusinessesPage />
          </Route>
          <Route path="/resources">
            <ResourcesCenterPage />
          </Route>
          <Route path="/how-it-works">
            <HowItWorksPage />
          </Route>
          <Route path="/partners">
            <PartnersPage />
          </Route>
          <Route path="/distributors">
            <SuppliersPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}