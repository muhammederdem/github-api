import React, { Component } from "react";
import { Link } from "react-router-dom";
class RepoCard extends Component {
  render() {
    const item = this.props.item;
    return (
      <Link to={`/details/${item.id}`} className="card">
        <div className="card__title">{item.name}</div>
        {item.description && (
          <div className="card__desc">
            {item.description.length > 60
              ? `${item.description.slice(0, 60)}...`
              : item.description}
          </div>
        )}
        <div className="card-controls">
          <div className="card-controls__item">
            <strong>Stars:</strong> {item.stargazers_count}
          </div>
          <div className="card-controls__item">
            <strong>Forks:</strong> {item.forks_count}
          </div>
          <div className="card-controls__item">
            <strong>Lang:</strong> {item.language}
          </div>
        </div>
      </Link>
    );
  }
}

export default RepoCard;
