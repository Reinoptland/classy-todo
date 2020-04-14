import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, completed, toggleCompleted, id } = this.props;

    return (
      <div style={{ color: completed ? "green" : "yellow" }}>
        <h3>{title}</h3>
        <button
          onClick={() => {
            toggleCompleted(id);
          }}
        >
          DONE
        </button>
      </div>
    );
  }
}
