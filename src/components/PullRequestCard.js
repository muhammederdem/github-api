import React, { Component } from "react";
class PullRequestCard extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="pr-card">
        <div className="pr-card__title">{item.title}</div>
        <div className="pr-card__title"></div>
        <div className="pr-card__title"></div>
        <div className="pr-card__title"></div>
      </div>
    );
  }
}

export default PullRequestCard;
