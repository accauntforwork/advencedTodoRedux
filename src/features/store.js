import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./scile";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
