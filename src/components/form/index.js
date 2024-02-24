import React from "react";

const TodoForm = (props) => {
  const { value, handleInputChnage, handleTodoSubmit } = props;
  return (
    <div className="form-body">
      <input
        type="text"
        placeholder="Add todo"
        name="todoinput"
        value={value}
        onChange={(e) => {
          handleInputChnage(e);
        }}
      ></input>
      <button onClick={handleTodoSubmit}>Submit todo</button>
    </div>
  );
};
export default TodoForm;
