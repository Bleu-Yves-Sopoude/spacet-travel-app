import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    missionItems: [],
    isLoading: true,
};

const missionsSlice = createSlice({
    name: 'missions',
    initialState,
});

export default missionsSlice.reducer;