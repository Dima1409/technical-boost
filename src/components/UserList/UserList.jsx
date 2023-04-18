import React, { useEffect, useState } from "react";
import UserCard from "components/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, fetchUsers } from "redux/users/operations";
import { UserList, ButtonPage, ButtonWrapper } from "./UserList.styled";
import {
  selectUsers,
  selectTotalUsers,
  selectTotalPage,
  selectIsLoading,
} from "redux/users/selectors";

const UsersList = () => {
  const users = useSelector(selectUsers);
  const pageLimit = 12;
  const dispatch = useDispatch();
  const totalUsers = useSelector(selectTotalUsers);
  const totalPages = useSelector(selectTotalPage);
  const isLoading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const total = users;
  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchUsers({ page: currentPage, limit: pageLimit })).then(
      () => {}
    );
  }, [currentPage, dispatch]);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePageNext = () => {
    scroll();
    setCurrentPage((prev) => prev + 1);
  };

  const handlePagePrev = () => {
    scroll();
    setCurrentPage((prev) => prev - 1);
  };

  const handleStartPage = () => {
    setCurrentPage(1);
    scroll();
  };

  const handleLastPage = () => {
    scroll();
    setCurrentPage(totalPages);
  };

  return (
    <>
      <UserList>
        {total.length === 0
          ? null
          : total.map(({ id, tweets, avatar, followers, isFollow }) => {
              return (
                <UserCard
                  key={id}
                  id={id}
                  tweets={tweets}
                  avatar={avatar}
                  followers={followers}
                  isFollow={isFollow}
                ></UserCard>
              );
            })}
      </UserList>
      {totalUsers !== 0 && (
        <ButtonWrapper>
          {isLoading ? (
            <div>loading...</div>
          ) : (
            <>
            {currentPage === 1 ? null : <ButtonPage
                onClick={handleStartPage}
                style={{ padding: "6px", width: "70px" }}
              >
                start
              </ButtonPage>}
              

              {currentPage === 1 ? null : (
                <ButtonPage onClick={handlePagePrev}>prev page</ButtonPage>
              )}
              {totalUsers !== 0 &&
                totalUsers / pageLimit > currentPage && (
                  <ButtonPage onClick={handlePageNext}>next page</ButtonPage>
                )}
              {currentPage === totalPages ? null : (
                <ButtonPage
                  onClick={handleLastPage}
                  style={{ padding: "6px", width: "70px" }}
                >
                  end
                </ButtonPage>
              )}
            </>
          )}
        </ButtonWrapper>
      )}
    </>
  );
};
export default UsersList;
