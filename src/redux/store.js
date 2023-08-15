import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice.js'

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets:rocketsReducer,
  },
});

export default store;
