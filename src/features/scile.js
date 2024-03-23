import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todoList")) || [];
// const copiedState = [...initialState];
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let id = Math.random().toString(36).substring(2, 15);
      state.push({
        id: id,
        text: action.payload,
        completed: false,
      });

      // copiedState.push({
      //   id: id,
      //   text: action.payload,
      //   completed: false,
      // });
      localStorage.setItem("todoList", JSON.stringify(state));
    },
    toggleTodoComplete: (state, action) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload);
      state[todoIndex].completed = !state[todoIndex].completed;

      // copiedState[todoIndex].completed = !copiedState[todoIndex].completed;
      localStorage.setItem("todoList", JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      // state = state.filter((el) => el.id !== action.payload);

      // state = state.filter(function (el) {
      //   console.log(el.text);
      //   return el.id !== action.payload;
      // });

      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload) {
          // state[i].remove();
          state.splice(i, 1);
        }
      }

      // for (let i = 0; i < copiedState.length; i++) {
      //   if (copiedState[i].id === action.payload) {
      //     // state[i].remove();
      //     copiedState.splice(i, 1);
      //   }
      // }
      localStorage.setItem("todoList", JSON.stringify(state));

      // state.forEach((el,i) => {
      //   if (el.id == action.payload) {
      //     state.splice(i, 1);
      //   }
      // });
    },
    editTodo: (state, action) => {
      const todoIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[todoIndex].text = action.payload.text;
      // console.log("65", action.payload.text);

      // copiedState[todoIndex].text = action.payload.text;
      // console.log(copiedState);
      localStorage.setItem("todoList", JSON.stringify(state));
    },
    // Qo'shimcha actions va reducers (kerak bo'lsa)
  },
});

export const { addTodo, toggleTodoComplete, removeTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
