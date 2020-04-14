import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  state = {
    todos: [],
  };
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    console.log(todos);
    this.setState({ todos: [...this.state.todos, ...todos] });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
            />
          );
        })}
      </div>
    );
  }
}
