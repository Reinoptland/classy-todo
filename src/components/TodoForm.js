import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    title: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addTodo(this.state.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add a todo:</h3>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <input type="submit" />
      </form>
    );
  }
}
