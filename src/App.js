import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoList />
        </header>
      </div>
    );
  }
}

export default App;
