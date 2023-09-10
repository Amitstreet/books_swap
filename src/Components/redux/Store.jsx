import { configureStore } from "@reduxjs/toolkit";
import codeIDEdata from "./codeIDEdata";
import userData from "./userData";

const store = configureStore({
  reducer: {
    IDEdata: codeIDEdata,
    UserData: userData,
  },
});

export default store;