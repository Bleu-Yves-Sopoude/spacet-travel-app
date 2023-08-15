import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const fetchRockets = createAsyncThunk("rockets/fetchData", async () => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets");
    const rocketsData = response.data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      flickr_images: rocket.flickr_images[0],
      description: rocket.description,
      reserved: false,
    }));

    return rocketsData;
  } catch (error) {
    throw new Error("Unable to fetch data for the rockets");
  }
});

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
