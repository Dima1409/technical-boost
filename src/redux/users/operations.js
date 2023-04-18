import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "Services/AxiosConfig";

const fetchUsers = createAsyncThunk("users/fetch", async ({page, limit}, thunkApi) => {
  try {
    const response = await api.get(`/books?limit=${limit}&page=${page}`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const fetchAllUsers = createAsyncThunk("users/fetchAll", async (_, thunkApi) => {
  try {
    const response = await api.get(`/books`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const editUser = createAsyncThunk('user/editUser', async (item, thunkApi) => {
    try {
        const {id, isFollow, followers} = item;
        const res = {
           isFollow,
           followers
        }
        const response = await api.put(`/books/${id}`, res)
        return response.data;
    } catch (e) {
        console.error(e.message, '--------error message CATCH EDIT')
        return thunkApi.rejectWithValue(e.message)
    }
})

export {fetchUsers, editUser, fetchAllUsers};
