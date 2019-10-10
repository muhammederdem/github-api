import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../redux/actions";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  getRepos() {
    this.props.fetchRepos(this.state.page);
    this.setState({ page: this.state.page + 1 });
    console.log("page", this.state.page);
  }
  renderRepos() {
    const { repos } = this.props;
    return repos.map(repo => {
      return (
        <a href={repo.id} key={repo.id}>
          {repo.name}
        </a>
      );
    });
  }
  componentDidMount() {
    this.getRepos();
  }
  render() {
    return (
      <div>
        <h2>About</h2> {this.props.isLoading ? "loading" : "loaded"}
        <button onClick={() => this.getRepos()}>test click</button>
        {this.renderRepos()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { repos, isLoading, error } = state.repos;
  return {
    isLoading,
    repos,
    error
  };
}

export default connect(
  mapStateToProps,
  { fetchRepos }
)(About);
