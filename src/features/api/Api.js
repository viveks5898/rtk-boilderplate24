import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk("fetchApi", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res?.json();
});

const apiSLice = createSlice({
  name: "apiSlice",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: () => {
    buildQueries.addCase(fetchApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchApi.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default apiSLice.reducer;
