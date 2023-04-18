import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.header`
margin: 40px;
`

const StyledNavLink = styled(NavLink)`
color: #FFFFFF;
margin: 6px;
padding: 6px 20px;
border-radius: 10px;
background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );;
&:active {
    border: 2px solid #000;
}
&:hover, &:focus {
    box-shadow: 0 0 10px #471ca9;
}
`

export {Header, StyledNavLink};

