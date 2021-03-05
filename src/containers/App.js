import React from "react";
import { connect } from "react-redux";
import "./App.css";

import { setSearchField, requestRobots } from "../actions";
import MainPage from "../components/MainPage";

const App = (props) => {
  console.log(props);
  return <MainPage {...props} />;
};

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
