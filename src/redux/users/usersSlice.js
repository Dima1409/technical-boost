import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, editUser, fetchAllUsers } from "./operations";

const page_limit=12;

const usersState = {
  items: [],
  totalItems: 0,
  totalPage: 1,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, handlePending);
    builder.addCase(fetchUsers.rejected, handleRejected);
    builder.addCase(fetchAllUsers.pending, handlePending);
    builder.addCase(fetchAllUsers.rejected, handleRejected);
    builder.addCase(editUser.pending, handlePending);
    builder.addCase(editUser.rejected, handleRejected);
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.totalItems = action.payload.length;
      state.totalPage = Math.ceil(action.payload.length/page_limit);
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map((elem) => {
        if (elem.id === action.payload.id) {
          elem = action.payload;
        }
        return elem;
      });
    });
  },
});

export const usersReducer = usersSlice.reducer;
