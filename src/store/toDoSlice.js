import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: [
    { id: 0, text: "Uncompleted task", completed: false },
    { id: 1, text: "Completed task", completed: true },
  ],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newToDo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.toDos.push(newToDo);
    },
    removeToDo: (state, action) => {
      const id = action.payload;
      state.toDos = state.toDos.filter((toDo) => toDo.id !== id);
    },
    completeToDo: (state, action) => {
      const id = action.payload;
      const index = state.toDos.findIndex((toDo) => toDo.id === id);
      state.toDos[index].completed = !state.toDos[index].completed;
    },
    changeToDo: (state, action) => {
      const { id, text } = action.payload;
      const index = state.toDos.findIndex((toDo) => toDo.id === id);
      state.toDos[index].text = text;
    },
    clearToDos: (state) => {
      state.toDos = [];
    },
  },
});

export const { addToDo, removeToDo, completeToDo, changeToDo, clearToDos } =
  toDoSlice.actions;

export const selectToDos = (state) => state.toDo.toDos;
export const selectCompletedToDos = (state) =>
  state.toDo.toDos.filter((toDo) => toDo.completed);
export const selectUncompletedToDos = (state) =>
  state.toDo.toDos.filter((toDo) => !toDo.completed);

export default toDoSlice.reducer;
