import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postDeleted(state, action) {
      const postIdToDelete = action.payload;
      return state.filter((post) => post.id !== postIdToDelete);
    },
  },
});

export const { postAdded, postDeleted } = postSlice.actions;
export const SelectAllPost = (state) => state.posts;
export default postSlice.reducer;
