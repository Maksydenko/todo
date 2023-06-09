import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IToDo } from "@/interfaces/toDo.interface";

interface IInitialState {
  toDos: IToDo[];
}

const initialState: IInitialState = {
  toDos: [
    { id: 0, text: "Uncompleted task", completed: false },
    { id: 1, text: "Completed task", completed: true },
  ],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<IToDo["text"]>) => {
      const newToDo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.toDos.push(newToDo);
    },
    removeToDo: (state, action: PayloadAction<IToDo["id"]>) => {
      const id = action.payload;
      state.toDos = state.toDos.filter((toDo) => toDo.id !== id);
    },
    completeToDo: (state, action: PayloadAction<IToDo["id"]>) => {
      const id = action.payload;
      const index = state.toDos.findIndex((toDo) => toDo.id === id);
      state.toDos[index].completed = !state.toDos[index].completed;
    },
    changeToDo: (state, action: PayloadAction<Omit<IToDo, "completed">>) => {
      const { id, text } = action.payload;
      const index = state.toDos.findIndex((toDo) => toDo.id === id);
      state.toDos[index].text = text;
    },
    clearToDos: (state) => {
      state.toDos = [];
    },
  },
});

// Actions
export const { addToDo, removeToDo, completeToDo, changeToDo, clearToDos } =
  toDoSlice.actions;

// Selects

interface ISelect {
  (state: { toDo: IInitialState }): IToDo[];
}

export const selectToDos: ISelect = (state) => state.toDo.toDos;

export const selectCompletedToDos: ISelect = (state) =>
  state.toDo.toDos.filter((toDo) => toDo.completed);

export const selectUncompletedToDos: ISelect = (state) =>
  state.toDo.toDos.filter((toDo) => !toDo.completed);

// Reducer
export default toDoSlice.reducer;
