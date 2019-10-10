import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../redux/actions";
import RepoCard from "../components/RepoCard";
import Preloader from "../components/Preloader";
import "../assets/scss/repo-card.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  getRepos() {
    this.props.fetchRepos(this.state.page);
  }
  nextPage() {
    const pageNumber = this.state.page + 1;
    this.setState({ page: pageNumber });
    this.props.fetchRepos(pageNumber);
  }
  prevPage() {
    if (this.state.page > 1) {
      const pageNumber = this.state.page - 1;
      this.setState({ page: pageNumber });
      this.props.fetchRepos(pageNumber);
    }
  }
  renderRepos() {
    const { repos } = this.props;
    return repos.map(repo => {
      return <RepoCard item={repo} key={repo.id} />;
    });
  }
  componentDidMount() {
    this.getRepos();
  }
  render() {
    return (
      <div className="container">
        {this.props.isLoading && <Preloader />}
        <div className="list">{this.renderRepos()}</div>
        <div className="pagination">
          <button
            onClick={() => this.prevPage()}
            className="button--primary pagination__button"
            disabled={this.state.page === 1}
          >
            Previous Page
          </button>
          <button
            onClick={() => this.nextPage()}
            className="button--primary pagination__button"
            disabled={this.props.repos.length < 12}
          >
            Next Page
          </button>
        </div>
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
)(Home);
