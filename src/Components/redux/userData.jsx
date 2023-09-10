import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
  name: "UserData",
  initialState: {
    items: {
     auth:{
      jwt:"",
      isSignedin:false
     },
     name:"",
     email:"",
     phone:"",
    },
  },
  reducers: {
    setJWT:(state, action)=>{
      state.items.auth.jwt = action.payload;
    },
    setLogin:(state, action)=>{
      // state.items.options.executeParameters.stdin = action.payload;
      // state.items.stdin = action.payload;
      state.items.auth.isSignedin = action.payload;
    },
  },
});

export const { setJWT, setLogin} = userData.actions;
export default userData.reducer;
