import React from "react";
import { connect } from "react-redux";
import { reloadHome } from "../../actions";
import { fetchRemindersCall } from "../../actions";
import AddReminderInput from "./addReminder";

class Content extends React.Component {
  componentDidMount() {
    this.props.fetchRemindersCall();
  }

  render() {
    let remindersElements = this.props.remindersList.map((reminder, i) => (
      <div key={reminder.id} className="reminderContainer">
        {reminder.content}
      </div>
    ));

    return (
      <div>
        <div className="contentContainer">
          {remindersElements}
          <AddReminderInput />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  reloadHome: () => {
    dispatch(reloadHome());
  },
  fetchRemindersCall: () => {
    dispatch(fetchRemindersCall());
  }
});

const mapStateToProps = state => {
  return {
    isLoading: state.navbar.isLoading,
    remindersList: state.reminders.list
  };
};

Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
export default Content;