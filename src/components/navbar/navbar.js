import React from "react";
import { connect } from "react-redux";
import { reloadHome } from "../../actions";

let Navbar = ({ reloadHome, isLoading }) => (
  <div className="navbarContainer">
    <h1 onClick={() => reloadHome()}>recall5</h1>
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
