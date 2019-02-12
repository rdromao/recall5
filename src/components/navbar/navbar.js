import React from "react";
import { connect } from "react-redux";
import { reloadHome } from "../../actions";

let Navbar = ({ reloadHome, isLoading }) => (
  <div onClick={() => reloadHome()}>
    This is the navbar {isLoading ? "loading" : "not loading"}
  </div>
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

Navbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
export default Navbar;
