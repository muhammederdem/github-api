import React, { Component } from "react";
class IssueCard extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="issue-card">
        <div className="issue-card__title">{item.title}</div>
        <div className="issue-card__title"></div>
        <div className="issue-card__title"></div>
        <div className="issue-card__title"></div>
      </div>
    );
  }
}

export default IssueCard;
