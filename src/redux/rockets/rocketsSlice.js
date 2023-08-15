import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rocketItems: [],
  isLoading: true,
};

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
});

export default rocketsSlice.reducer;
