import React from "react";
import { connect } from "react-redux";
import { selectReminder, deleteReminder } from "../../actions";

class Reminder extends React.Component {
  render() {
    let isSelected = this.props.selectedReminderId === this.props.reminder.id
    let outterClickHandler = isSelected ? null:
    () => this.props.selectReminder(isSelected ? null:this.props.reminder.id)
    let contentClickHandler = isSelected ? 
    () => this.props.selectReminder(isSelected ? null:this.props.reminder.id):null
    return (
      <div 
        onClick = {outterClickHandler}
        className={isSelected ? "reminderContainer selected":"reminderContainer"}>
        <div onClick={contentClickHandler}>{this.props.reminder.content}</div>
        {isSelected && 
          <div className="reminderToolbar">
            <div
              onClick={() => this.props.deleteReminder(this.props.reminder.id)}
              className="actionButton delete">
              Delete
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteReminder: (reminderToDeleteId) => {
    dispatch(deleteReminder(reminderToDeleteId));
    dispatch(selectReminder(null));
  },
  selectReminder: (newSelected) => {
    dispatch(selectReminder(newSelected));
  }
});

const mapStateToProps = state => {
  return {
    selectedReminderId: state.reminders.selectedId
  };
};

Reminder = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reminder);
export default Reminder;