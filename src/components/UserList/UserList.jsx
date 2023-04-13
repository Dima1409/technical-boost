import React from "react";
import { UserList } from "./UserList.styled";
import UserCard from "components/UserCard";

const UsersList = () => {
  return <UserList>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
  </UserList>;
};

export default UsersList;
