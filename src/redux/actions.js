import API from "../api";
import {
  GET_REPOS,
  GET_REPOS_ERROR,
  GET_REPOS_SUCCESS,
  GET_REPO_DETAIL,
  GET_REPO_DETAIL_SUCCESS,
  GET_REPO_DETAIL_ERROR,
  GET_PULLS,
  GET_PULLS_SUCCESS,
  GET_PULLS_ERROR,
  GET_ISSUES,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_ERROR
} from "./constants";

export const getRepos = () => {
  const action = {
    type: GET_REPOS
  };
  return action;
};
export const receiveRepos = repos => {
  const action = {
    type: GET_REPOS_SUCCESS,
    repos
  };
  return action;
};
export const getReposError = error => {
  const action = {
    type: GET_REPOS_ERROR,
    error
  };
  return action;
};

export const fetchRepos = page => dispatch => {
  dispatch(getRepos());
  API.get(`users/reactjs/repos?page=${page}&per_page=12`)
    .then(res => {
      dispatch(receiveRepos(res.data));
    })
    .catch(err => {
      dispatch(getReposError(err.response.data));
    });
};

export const getRepoDetail = () => {
  const action = {
    type: GET_REPO_DETAIL
  };
  return action;
};
export const receiveRepoDetail = repoDetail => {
  const action = {
    type: GET_REPO_DETAIL_SUCCESS,
    repoDetail
  };
  return action;
};
export const getRepoDetailError = error => {
  const action = {
    type: GET_REPO_DETAIL_ERROR,
    error
  };
  return action;
};

export const fetchRepoDetail = id => dispatch => {
  dispatch(getRepoDetail());
  API.get(`repositories/${id}`)
    .then(res => {
      dispatch(receiveRepoDetail(res.data));
    })
    .catch(err => {
      dispatch(getRepoDetailError(err.response.data));
    });
};

export const getPulls = () => {
  const action = {
    type: GET_PULLS
  };
  return action;
};
export const receivePulls = pulls => {
  const action = {
    type: GET_PULLS_SUCCESS,
    pulls
  };
  return action;
};
export const getPullsError = error => {
  const action = {
    type: GET_PULLS_ERROR,
    error
  };
  return action;
};

export const fetchPulls = (id, page) => dispatch => {
  dispatch(getPulls());
  API.get(`repositories/${id}/pulls?page=${page}&per_page=12`)
    .then(res => {
      dispatch(receivePulls(res.data));
    })
    .catch(err => {
      dispatch(getPullsError(err.response.data));
    });
};

export const getIssues = () => {
  const action = {
    type: GET_ISSUES
  };
  return action;
};
export const receiveIssues = issues => {
  const action = {
    type: GET_ISSUES_SUCCESS,
    issues
  };
  return action;
};
export const getIssuesError = error => {
  const action = {
    type: GET_ISSUES_ERROR,
    error
  };
  return action;
};

export const fetchIssues = (id, page) => dispatch => {
  dispatch(getIssues());
  API.get(`repositories/${id}/issues?page=${page}&per_page=12`)
    .then(res => {
      dispatch(receiveIssues(res.data));
    })
    .catch(err => {
      dispatch(getIssuesError(err.response.data));
    });
};
