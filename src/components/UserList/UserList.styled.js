import styled from "styled-components";
import theme from "theme/theme";
import { ButtonFollow } from "components/UserCard/UserCard.styled";

const ButtonPage = styled(ButtonFollow)`
  border: none;
  border-radius: 6px;
  width: 120px;
  padding: 6px 12px;
  margin: 0 10px;
  font-size: 16px;
  height: 40px;
  box-shadow: none;
  &:hover:not(:disabled) {
    box-shadow: 0 0 10px #471ca9;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
`;

const UserList = styled.ul`
  display: grid;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  margin-bottom: 20px;

  ${theme.mq.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 32px;
  }
  ${theme.mq.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`;

export { UserList, ButtonPage, ButtonWrapper };
