import React from "react";
import { useDispatch } from "react-redux";
import formatNumber from "utils/formatNumber";
import { editUser } from "redux/users/operations";
// import { selectIsLoading } from "redux/users/selectors";
import {
  Item,
  Logo,
  ContactsImage,
  AvatarWrapper,
  UserAvatar,
  CardLine,
  TextInfo,
  ButtonFollow,
  ButtonFollowing,
} from "./UserCard.styled";
import contactsImage from "assets/images/userContacts.svg";

const UserCard = ({ id, tweets, avatar, followers, isFollow }) => {
  const dispatch = useDispatch();
  // const loading = useSelector(selectIsLoading)
  const handleFollow = () => {
    const obj = {
      id,
      isFollow: !isFollow,
      followers: isFollow ? followers - 1 : followers + 1,
    };
    dispatch(editUser(obj));
  };
  return (
    <Item>
      <Logo />
      <ContactsImage src={contactsImage} alt="message" />
      <CardLine>
        <AvatarWrapper>
          <UserAvatar src={avatar} alt="avatar" />
        </AvatarWrapper>
      </CardLine>

      <TextInfo>{formatNumber(tweets)} tweets</TextInfo>
      <TextInfo>{formatNumber(followers)} followers</TextInfo>
      {!isFollow ? (
        <ButtonFollow onClick={handleFollow}>Follow</ButtonFollow>
      ) : (
        <ButtonFollowing onClick={handleFollow}>Following</ButtonFollowing>
      )}
    </Item>
  );
};

export default UserCard;
