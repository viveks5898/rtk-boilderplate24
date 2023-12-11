import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  message: "",
};

export const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      if (state.count === 0) {
        state.message = "already zero!";
      } else {
        state.count = 0;
      }
    },
    incrementByAddingAmount: (state, action) => {
      state.count = action.payload;
    },
  },
});
export const { increment, decrement, reset, incrementByAddingAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
