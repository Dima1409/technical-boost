const selectUsers = state => state.users.items;
const selectIsError = state => state.users.error;
const selectIsLoading = state => state.users.isLoading;
const selectTotalPage = state => state.users.totalPage;
const selectTotalUsers = state => state.users.totalItems;

export {selectIsLoading, selectUsers, selectIsError, selectTotalPage, selectTotalUsers};