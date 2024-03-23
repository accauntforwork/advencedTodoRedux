import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleTodoComplete,
  removeTodo,
  editTodo,
} from "../features/scile";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const inputRef = useRef();
  const editInputRef = useRef();
  // const [editInput, setEditInput] = useState("");
  const [taskId, setTaskId] = useState("");

  const handleAddTodo = (text) => {
    if (text) {
      dispatch(addTodo(text));
      inputRef.current.value = "";
    } else {
      document.getElementById("my_modal_2").showModal();
    }
    inputRef.current.focus();
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleTodoComplete(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const handleEditInputTodo = (text) => {
    if (text) {
      // console.log(text); text-bor
      // setEditInput(text);
      // console.log(editInput);
      // return text;
      const id = taskId;
      dispatch(editTodo({ id, text }));
    } else {
      document.getElementById("my_modal_2").showModal();
    }
    editInputRef.current.value = "";
  };

  const handleEditTodo = (id) => {
    document.getElementById("my_modal_1").showModal();
    // let text = handleEditInputTodo();
    setTaskId(id);

    // let text = ;
    // text && dispatch(editTodo({ id, text }));
  };
  return (
    <div className="bg-black bg-opacity-40 rounded-lg p-12">
      <div className="bg-white p-4 rounded-lg bg-opacity-10 text-center">
        <input
          className="input border-solid border-2 border-sky-500 w-[500px] mb-4"
          type="text"
          ref={inputRef}
        />
        <button
          className="btn px-16 ml-4 border-solid border-2 border-sky-500"
          onClick={() => handleAddTodo(inputRef.current.value)}
        >
          Add
        </button>
      </div>

      <ul className="flex flex-col gap-2 mt-4">
        {todos.map((todo, index) => (
          <li
            className="flex justify-between bg-slate-300 bg-opacity-90 rounded-lg py-2 px-4 border-solid border-2 border-orange-700"
            key={todo.id}
          >
            <div className="flex gap-4 items-center">
              <p className="text-black">{index + 1}</p>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
                className="cursor-pointer"
              />
              <p
                className={`text-xl text-amber-700 ${
                  todo.completed === true ? "line-through" : ""
                }`}
              >
                {todo.text}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="cursor-pointer bg-red-950 px-3 rounded-lg"
              >
                ❌
              </button>
              |
              <button
                onClick={() => handleEditTodo(todo.id)}
                className="cursor-pointer bg-blue-950 px-3 rounded-lg"
              >
                ✒️
              </button>
            </div>
          </li>
        ))}
      </ul>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Input cannot be empty</span>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p> */}
          <div className="modal-action">
            <form method="dialog">
              <input
                className="input border-solid border-2 border-sky-500 mb-4"
                type="text"
                ref={editInputRef}
              />
              <button
                className="btn px-16 ml-4 border-solid border-2 border-sky-500"
                onClick={() => handleEditInputTodo(editInputRef.current.value)}
              >
                Change
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TodoList;
