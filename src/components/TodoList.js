import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

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

  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false,
    };

    console.log(newTodo);
    this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  toggleCompleted = (id) => {
    // set the todo item with that id to completed
    console.log("ID:", id, " Completed");
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        {this.state.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
              toggleCompleted={this.toggleCompleted}
            />
          );
        })}
      </div>
    );
  }
}
