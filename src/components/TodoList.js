import React, { Component } from "react";

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
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </div>
    );
  }
}
