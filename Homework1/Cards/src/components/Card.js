import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { id, category, handleClose } = this.props;
    return (
      <div className="card">
        <span>{id}</span>
        <span>{category}</span>
        <span
          onClick={() => {
            handleClose(id);
          }}
          id="unmount"
        >X</span>
      </div>
    );
  }
}
