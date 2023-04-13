import React from "react";
import { Item, Logo } from "./UserCard.styled";
import contactsImage from "assets/images/userContacts.svg";

const UserCard = () => {
  return (
    <Item>
      <Logo />
      <img src={contactsImage} alt="message" />
    </Item>
  );
};

export default UserCard;
