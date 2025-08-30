// ✅ Async thunk to fetch all users (Admin only)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    "admin/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || error.message || "Failed to fetch users"
            );
        }
    }
);


// ✅ Async thunk to add a new user (Admin only)
export const addUser = createAsyncThunk(
    "admin/addUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
                userData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || error.message || "Failed to add user"
            );
        }
    }
);

//update the user
export const updateUser = createAsyncThunk(
    "admin/updateUser",
    async ({ id, name, email, role }, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
                { name, email, role },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || error.message || "Failed to update user"
            );
        }
    }
);


export const deleteUser = createAsyncThunk(
    "admin/deleteUser",
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    },
                }
            );
            return id; // ✅ Return the deleted user's ID
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || error.message || "Failed to delete user"
            );
        }
    }
);

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null; // ✅ clear previous errors
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload; // ✅ store fetched users
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch users"; // ✅ safer error
            })


            .addCase(updateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                const userIndex = state.users.findIndex(
                  (user) => user._id === updatedUser._id
                );
              
                if (userIndex !== -1) {
                  state.users[userIndex] = updatedUser; // ✅ Replace the old user
                }
              })


              .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false; // ✅ Ensure loading is false
                state.users = state.users.filter((user) => user._id !== action.payload);
              })

              
              .addCase(addUser.pending, (state) => {
                state.loading = true;
                state.error = null; // ✅ clear old errors
              })
              .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload); // ✅ add new user to list
              })
              .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message || "Failed to add user"; // ✅ safe fallback
              })
    }
});


export default adminSlice.reducer;