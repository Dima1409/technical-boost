import React from "react";
import { useLocation } from "react-router-dom";
import { Nav, StyledNavLink } from "./Navigation.styled";
import { ROUTES } from "router";

const Navigation = () => {
    const location=useLocation()
    return (
      <Nav>
        <StyledNavLink to={ROUTES.HOME} state={{ from: location }}>Home</StyledNavLink>
        <StyledNavLink to={ROUTES.TWEETS} state={{ from: location }}>Go to tweets</StyledNavLink>
        </Nav>  
    )
    
}

export default Navigation;