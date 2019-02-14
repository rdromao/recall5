import React from "react";
import { connect } from "react-redux";
import { reloadHome } from "../../actions";

let Navbar = ({ reloadHome, isLoading }) => (
  <div className="navbarContainer">
    <div className="navbarTitle" onClick={() => reloadHome()}>
      recall5 {isLoading ? "cargando" : "no cargando"}
    </div>
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
