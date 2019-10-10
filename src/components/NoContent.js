import React, { Component } from "react";
class NoContent extends Component {
  render() {
    return (
      <div className="no-content">
        <h1 className="no-content__title">{this.props.title}</h1>
      </div>
    );
  }
}

export default NoContent;
