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

export const joinmission = createAsyncThunk('missions/joinmission', async (missionId) => {
  try {
    // Simulate API call to join mission
    // You can replace this with your actual API call
    // For now, we'll just return the missionId
    return missionId;
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
        state.missions = action.payload.map((item) => ({
          mission_name: item.mission_name,
          description: item.description,
          mission_id: item.mission_id,
          reserved: false,
        }));
      })
      .addCase(fetchmissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(joinmission.fulfilled, (state, action) => {
        const missionId = action.payload;
        state.missions = state.missions.map((mission) =>
          mission.mission_id === missionId ? { ...mission, reserved: true } : mission
        );
      });
  },
});

export const missionsReducer = missionsSlice.reducer;
export default missionsSlice.reducer;
