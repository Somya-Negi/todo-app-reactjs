import React from "react";
import TodoComponent from "./components/todoComponent";
import Header from "./components/header";
import './assets/styles/global.scss';

function App() {
  return (
    <div className="main-body">
      <Header />
      <TodoComponent />
    </div>
  );
}

export default App;
