import { combineReducers } from "@reduxjs/toolkit";

import toDoReducer from "./toDo/toDoSlice";

export const rootReducer = combineReducers({
  toDo: toDoReducer,
});
