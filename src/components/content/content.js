import React from "react";
import { connect } from "react-redux";
import { reloadHome } from "../../actions";

let Content = ({ reloadHome, isLoading }) => (
  <div className="contentContainer">Add a reminder…</div>
);

const mapDispatchToProps = dispatch => ({
  reloadHome: () => {
    dispatch(reloadHome());
  }
});

const mapStateToProps = state => {
  return {
    isLoading: state.navbar.isLoading
  };
};

Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
export default Content;
