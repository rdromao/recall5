import React from "react";
import { connect } from "react-redux";
import { reloadHome } from "../../actions";
import { fetchRemindersCall } from "../../actions";
import AddReminderInput from "./addReminder";
import Reminder from "./reminder"

class Content extends React.Component {
  componentDidMount() {
    this.props.fetchRemindersCall();
  }

  render() {
    let remindersElements = this.props.remindersList.map((reminder, i) => (
      <Reminder key={reminder.id} reminder={reminder}/>
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
    selectedReminderId: state.reminders.selectedId,
    remindersList: state.reminders.list
  };
};

Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
export default Content;