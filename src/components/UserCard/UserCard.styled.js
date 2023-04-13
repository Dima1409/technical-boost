import styled from "styled-components";
import { ReactComponent as LogoImage } from "assets/images/logo-goit.svg";

const Item = styled.li`
  position: relative;
  max-width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
const Logo = styled(LogoImage)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export { Item, Logo };
