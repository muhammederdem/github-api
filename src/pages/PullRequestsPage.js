import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPulls } from "../redux/actions";
import Preloader from "../components/Preloader";
import PullRequestCard from "../components/PullRequestCard";
import NoContent from "../components/NoContent";
import "../assets/scss/pr-card.scss";

class PullRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  getPulls() {
    const { id } = this.props;
    this.props.fetchPulls(id, this.state.page);
  }
  nextPage() {
    const { id } = this.props;
    const pageNumber = this.state.page + 1;
    this.setState({ page: pageNumber });
    this.props.fetchPulls(id, pageNumber);
  }
  prevPage() {
    const { id } = this.props;
    if (this.state.page > 1) {
      const pageNumber = this.state.page - 1;
      this.setState({ page: pageNumber });
      this.props.fetchPulls(id, pageNumber);
    }
  }
  componentDidMount() {
    this.getPulls();
  }
  renderList() {
    const { data } = this.props;
    return data.map(item => {
      return <PullRequestCard item={item} key={item.id} />;
    });
  }
  render() {
    const { data, isLoading } = this.props;
    return (
      <div>
        {isLoading && <Preloader />}
        <div className="pull-requests">
          {data.length > 0 ? (
            this.renderList()
          ) : (
            <NoContent title="No results" />
          )}
        </div>
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
            disabled={this.props.data.length < 12}
          >
            Next Page
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { data, isLoading, error } = state.pulls;
  return {
    isLoading,
    data,
    error
  };
}

export default connect(
  mapStateToProps,
  { fetchPulls }
)(PullRequests);
