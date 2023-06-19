import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const gethotel = createAsyncThunk("hotel/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5000/hotel/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addhotel = createAsyncThunk("hotel/add", async (newhotel) => {
  try {
    let result = axios.post("http://localhost:5000/hotel/add", newhotel);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deletehotel = createAsyncThunk("hotel/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/hotel/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const edithotel = createAsyncThunk("hotel/edit", async ({ id, edited }) => {
  try {
    let result = axios.put(`http://localhost:5000/hotel/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {

  status: null,
  hotels: null
}

export const HotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {

  },
  extraReducers: {


    //hoteeeeeel
    [gethotel.pending]: (state) => {
      state.status = "pending";
    },
    [gethotel.fulfilled]: (state, action) => {
      state.status = "success";
      state.hotels = action.payload.data.hotels;
    },
    [gethotel.rejected]: (state) => {
      state.status = "fail";
    },
    [addhotel.pending]: (state) => {
      state.status = "pending";
    },
    [addhotel.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addhotel.rejected]: (state) => {
      state.status = "fail";
    },
    [deletehotel.pending]: (state) => {
      state.status = "pending";
    },
    [deletehotel.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletehotel.rejected]: (state) => {
      state.status = "fail";
    },
    [edithotel.pending]: (state) => {
      state.status = "pending";
    },
    [edithotel.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [edithotel.rejected]: (state) => {
      state.status = "fail";
    },
  }
},
)

// Action creators are generated for each case reducer function
export const { } = HotelSlice.actions

export default HotelSlice.reducer