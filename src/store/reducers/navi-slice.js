import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 액션Async } from "../apis/액션-api";

/***steate****************** */
const state = {};
/*** async action************ */
export const 액션명 = createAsyncThunk("네임/액션명", async (매개변수) => {
  const 데이터 = await 액션Async(매개변수);
  return 데이터;
});
/***reducer  ************ */
export const 슬라이스네임 = createSlice({
  name: "네임",
  state,
  reducers: {
    //Sync
    액션크리에이터명: () => {},
  },
  extraReducers: (builder) => {
    // Async
    builder
      .addCase(액션명.pending, (state) => {})
      .addCase(액션명.fulfilled, (state) => {})
      .addCase(액션명.rejected, (state) => {});
  },
});
/***method  ************ */

export default 슬라이스네임.reducer;
