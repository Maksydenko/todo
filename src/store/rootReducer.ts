import { combineReducers } from "@reduxjs/toolkit";

import toDoReducer from "./toDoSlice";

export const rootReducer = combineReducers({
  toDo: toDoReducer,
});
