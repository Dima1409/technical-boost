import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  margin: 6px;
  padding: 6px 20px;
  border-radius: 10px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  &.active {
    box-shadow: 0 0 10px rgb(92, 211, 168);
  }
  &:hover {
    box-shadow: 0 0 10px #471ca9;
  }
`;

export { Nav, StyledNavLink };
