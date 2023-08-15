// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   missionItems: [],
//   isLoading: true,
// };

// const missionsSlice = createSlice({
//   name: 'missions',
//   initialState,
// });

// export default missionsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
  error: undefined,
};

export const fetchmissions = createAsyncThunk('missions/fetchmissions', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchmissions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchmissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = Object.keys(action.payload).map((item) => {
          const missions = {};
          missions.author = action.payload[item][0].author;
          missions.category = action.payload[item][0].category;
          missions.title = action.payload[item][0].title;
          missions.item_id = item;
          return missions;
        });
        state.missions = data;
      })
      .addCase(fetchmissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const missionsReducer = missionsSlice.reducer;
export default missionsSlice.reducer;
