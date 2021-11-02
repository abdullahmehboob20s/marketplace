import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 1,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { increment, decrement, setCounter } = counter.actions;

export default counter.reducer;
