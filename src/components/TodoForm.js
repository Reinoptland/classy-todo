import React, { Component } from "react";

export default class TodoForm extends Component {
  render() {
    return (
      <form>
        <h3>Add a todo:</h3>
        <label>Title</label>
        <input type="text" />
      </form>
    );
  }
}
