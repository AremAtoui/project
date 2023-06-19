import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getreservation = createAsyncThunk("reservation/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5000/reservation/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addreservation = createAsyncThunk("reservation/add", async (newreservation) => {
  try {
    let result = axios.post("http://localhost:5000/reservation/add", newreservation);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deletereservation= createAsyncThunk("reservation/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/reservation/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const updatereservation = createAsyncThunk("reservation/update", async ({ id, update }) => {
  try {
    let result = axios.put(`http://localhost:5000/reservation/${id}`, update);
    return result;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {

  status: null,
 reservation: null
}

export const ReservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {

  },
  extraReducers: {
  

    //hoteeeeeel
    [getreservation.pending]: (state) => {
      state.status = "pending";
    },
    [getreservation.fulfilled]: (state, action) => {
      state.status = "success";
      state.reservation = action.payload.data.reservation;
    },
    [getreservation.rejected]: (state) => {
      state.status = "fail";
    },
    [addreservation.pending]: (state) => {
      state.status = "pending";
    },
    [addreservation.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addreservation.rejected]: (state) => {
      state.status = "fail";
    },
    [deletereservation.pending]: (state) => {
      state.status = "pending";
    },
    [deletereservation.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletereservation.rejected]: (state) => {
      state.status = "fail";
    },
    [updatereservation.pending]: (state) => {
      state.status = "pending";
    },
    [updatereservation.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updatereservation.rejected]: (state) => {
      state.status = "fail";
    },
  }
},
)

// Action creators are generated for each case reducer function
export const {  } = ReservationSlice.actions

export default ReservationSlice.reducer