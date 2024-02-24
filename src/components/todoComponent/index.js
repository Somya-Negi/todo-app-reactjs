import React, { useEffect, useState } from "react";
import TodoForm from "../form";

const TodoComponent = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleInputChnage = (event) => {
    const { name, value } = event.target;
    setTodo(value);
    console.log("Todo in input function", todo);
  };

  const handleTodoSubmit = () => {
    setTodoList([...todoList, { value: todo }]);
    setTodo("");
  };

  useEffect(() => {
    console.log("Todo in useeffect function", todo);
  });

  //console.log("Todo after value set:", todo, "List", todoList);
  return (
    <div className="todo-body">
      {/*    <div>
          <h1>Todo APP</h1>
        <p>Counter = {counter}</p>
        <button onClick={handleClick}>Click me to increase counter</button>
      </div> */}
      <TodoForm
        value={todo}
        handleInputChnage={handleInputChnage}
        handleTodoSubmit={handleTodoSubmit}
      />

      <div className="todo-list">
        <ul>
          {todoList.map((todo, i) => {
            return <li key={i}>{todo.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoComponent;
