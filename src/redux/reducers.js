import { combineReducers } from "redux";
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

const reposState = {
  isLoading: false,
  repos: [],
  error: {}
};

const repos = (state = reposState, action) => {
  switch (action.type) {
    case GET_REPOS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_REPOS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        repos: action.repos
      });
    case GET_REPOS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};

const repoDetailState = {
  isLoading: true,
  data: [],
  error: {}
};
const repoDetail = (state = repoDetailState, action) => {
  switch (action.type) {
    case GET_REPO_DETAIL:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_REPO_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.repoDetail
      });
    case GET_REPO_DETAIL_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};

const pullsState = {
  isLoading: true,
  data: [],
  error: {}
};
const pulls = (state = pullsState, action) => {
  switch (action.type) {
    case GET_PULLS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_PULLS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.pulls
      });
    case GET_PULLS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};

const issuesState = {
  isLoading: true,
  data: [],
  error: {}
};
const issues = (state = issuesState, action) => {
  switch (action.type) {
    case GET_ISSUES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_ISSUES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.issues
      });
    case GET_ISSUES_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};

export default combineReducers({
  repos,
  repoDetail,
  pulls,
  issues
});
