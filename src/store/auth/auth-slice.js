import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: {
      status: "connected",
      name: "Robin",
    },
  },
});
