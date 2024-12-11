import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const authSlice = createSlice({
  name: "user",
  initialState: {
  
      user:{
        name:null,
        phone:null,
        passwword:null,
        loggedIn:false,
        header:false
      }
      

   
    
  },
  
  reducers: {
    login(state, action) {
      const userId = action.payload;
    
      state.user = userId;
   
    },
    logout(state) {
      state.user = null
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state) => state.user.user;
export default authSlice.reducer;