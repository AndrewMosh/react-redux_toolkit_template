import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
const store = configureStore({
  // здесь вы можете добавить ваши reducers
  reducer: {
    counter: counterSlice,
  },
});

export default store;
