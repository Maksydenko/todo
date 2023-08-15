import { combineReducers } from "@reduxjs/toolkit";

import toDoReducer from "./toDo/toDo.slice";

export const rootReducer = combineReducers({
  toDo: toDoReducer,
});
