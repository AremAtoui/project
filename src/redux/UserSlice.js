import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/register", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/Current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token")

      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const getUser = createAsyncThunk("user/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5000/user/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteUser = createAsyncThunk("user/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/user/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const editUser = createAsyncThunk("user/edit", async ({ id, edited }) => {
  try {
    let result = axios.put(`http://localhost:5000/user/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {

  status: null,
  user: null,
  users: null,
}

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    }
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },

    [userRegister.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.data.newUser;
      localStorage.setItem("token", action.payload.data.token);
    },

    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    [userLogin.pending]: (state) => {
      state.status = "pending";
    },

    [userLogin.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
    },

    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },

    [userCurrent.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload?.data.user;

    },

    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },

    [userCurrent.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload?.data.user;

    },

    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
    [getUser.pending]: (state) => {
      state.status = "pending";
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload.data.users;
    },
    [getUser.rejected]: (state) => {
      state.status = "fail";
    },

    [deleteUser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteUser.rejected]: (state) => {
      state.status = "fail";
    },
    [editUser.pending]: (state) => {
      state.status = "pending";
    },
    [editUser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editUser.rejected]: (state) => {
      state.status = "fail";
    },


  }
},
)

// Action creators are generated for each case reducer function
export const { logout } = UserSlice.actions

export default UserSlice.reducer