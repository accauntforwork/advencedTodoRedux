import React from "react";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <TodoList />
    </div>
  );
}

export default App;
