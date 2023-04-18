import styled from "styled-components";
import { ReactComponent as LogoImage } from "assets/images/logo-goit.svg";
import theme from "theme/theme";

const Item = styled.li`
  position: relative;
  width: auto;
  width: 260px;
  max-width: 300px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  transition: 0.3s;
  &:hover,
  &:focus {
    box-shadow: 0 0 20px #471ca9;
  }

  ${theme.mq.tablet} {
    width: 360px;
  }
  ${theme.mq.desktop} {
    width: 380px;
  }
`;
const Logo = styled(LogoImage)`
  position: absolute;
  padding: 5px;
  top: 15px;
  left: 15px;
  fill: #fff;
  transition: 0.3s;
  z-index: 2;
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const ContactsImage = styled.img`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
`;
const AvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;
const UserAvatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  position: absolute;
  border: 1px transparent;
  background: linear-gradient(
    114.99deg,
    rgb(71, 28, 169) -0.99%,
    rgb(87, 54, 163) 54.28%,
    rgb(75, 42, 153) 78.99%
  );
  border-radius: 50%;
`;
const CardLine = styled.div`
  height: 8px;
  margin: 214px auto 62px;
  position: relative;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

const TextInfo = styled.p`
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
`;

const ButtonFollow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  margin: 10px auto 36px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: 0.3s;
  &:disabled {
    background: #c3c3c3;
    color: #fff;
  }
  &:hover {
    cursor: default;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
  }
`;

const ButtonFollowing = styled(ButtonFollow)`
  background: #5cd3a8;
`;

export {
  Item,
  Logo,
  ContactsImage,
  UserAvatar,
  AvatarWrapper,
  CardLine,
  TextInfo,
  ButtonFollow,
  ButtonFollowing,
};
