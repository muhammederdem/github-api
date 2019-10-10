import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Switch, Route } from "react-router-dom";
import { fetchRepoDetail } from "../redux/actions";
import IssuesPage from "./IssuesPage";
import PullRequestsPage from "./PullRequestsPage";
import Preloader from "../components/Preloader";
import "../assets/scss/detail-page.scss";

class Home extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchRepoDetail(id);
  }
  render() {
    const id = this.props.match.params.id;
    const url = this.props.match.url;
    const { data, isLoading } = this.props;
    return (
      <div className="container">
        {isLoading && <Preloader />}
        <div className="detail">
          <div className="detail__header">
            <h1 className="detail__title">{data.name}</h1>
            <div className="detail-controls">
              <div className="detail-controls__item">
                <strong>Stars:</strong> {data.stargazers_count}
              </div>
              <div className="detail-controls__item">
                <strong>Forks:</strong> {data.forks_count}
              </div>
              <div className="detail-controls__item">
                <strong>Lang:</strong> {data.language}
              </div>
            </div>
          </div>
          <p className="detail__desc">{data.desc}</p>
          <Link to={`${url}/pull-requests`} className="button--primary">
            pull requests
          </Link>
          <Link to={`${url}/issues`} className="button--primary">
            issues
          </Link>
        </div>

        <div>
          <Switch>
            <Route exact path={`${url}/pull-requests`}>
              <PullRequestsPage id={id} />
            </Route>
            <Route exact path={`${url}/issues`}>
              <IssuesPage id={id} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { data, isLoading, error } = state.repoDetail;
  return {
    isLoading,
    data,
    error
  };
}

export default connect(
  mapStateToProps,
  { fetchRepoDetail }
)(Home);
