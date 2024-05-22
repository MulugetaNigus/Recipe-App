import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "52772",
};

export const counterSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    getID: (state, action) => {
      state.value = action.payload.id;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getID } = counterSlice.actions;
export default counterSlice.reducer;
