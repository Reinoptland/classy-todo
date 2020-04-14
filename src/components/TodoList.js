import React, { Component } from "react";

export default class TodoList extends Component {
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    console.log(todos);
  }
  render() {
    return <div>Todolist</div>;
  }
}
