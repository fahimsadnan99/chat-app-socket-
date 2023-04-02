import { createSlice } from "@reduxjs/toolkit";

let UserReducer = createSlice({
  name: "user",
  initialState: {
    img : "",
    name : ""
  },
  reducers: {
   UserInfo(state,actions){
    state.img = actions.payload.img
    state.name = actions.payload.name
   }
  },
});

export const { UserInfo } = UserReducer.actions;
export default UserReducer.reducer;
