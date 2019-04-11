import React from "react";
import { connect } from "react-redux";
import { reloadHome } from "../../actions";
import IosRefresh from "react-ionicons/lib/IosRefresh";

let Navbar = ({ reloadHome, isLoading, remindersCount }) => (
  <div className="navbarContainer">
    <div className="navbarTitle" onClick={() => reloadHome()}>
      recall5{" "}
      {isLoading && <IosRefresh fontSize="24px" color="#fff" rotate={true} />}
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
    isLoading: state.reminders.isLoading,
    remindersCount: state.reminders.list.length
  };
};

Navbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
export default Navbar;