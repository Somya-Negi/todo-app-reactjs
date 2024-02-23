import React, { useState } from "react";

const TodoComponent = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(counter + 1);
    }
    return (
        <div className="todo-body">
            <h1>Todo APP</h1>
            <p>Counter = {counter}</p>
            <button onClick={handleClick}>Click me to increase counter</button>
        </div>
    );
}

export default TodoComponent;

