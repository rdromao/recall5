import React from "react";
import { connect } from "react-redux";
import { updateNewReminder, addReminder } from "../../actions";

class AddReminderInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleContainerClick = this.handleContainerClick.bind(this);
    this.inputRef = React.createRef();
  }

  handleKeypress(e) {
    // If pressed enter with something written in the
    // input box, submit it, else just update value
    if (!this.reminderBlank(e.target.value) && e.key === "Enter") {
      console.log("Enter key was pressed and theres something written");
      this.props.addReminder();
    }
  }

  reminderBlank(s) {
    return !s || s.length === 0 || !s.trim();
  }

  handleChange(e) {
    this.props.updateNewReminder(e.target.value);
  }

  handleContainerClick() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className="reminderContainer" onClick={this.handleContainerClick}>
        <input
          type="text"
          ref={this.inputRef}
          className="newReminderInput textMuted"
          placeholder="Add a reminder…"
          onKeyPress={this.handleKeypress}
          onChange={this.handleChange}
          value={this.props.addReminderValue}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateNewReminder: newReminderValue => {
    console.log("New reminder value from component: ");
    console.log(newReminderValue);
    dispatch(updateNewReminder(newReminderValue));
  },
  addReminder: () => {
    console.log("Add new reminder to list");
    dispatch(addReminder());
  }
});

const mapStateToProps = state => {
  return {
    addReminderValue: state.reminders.addReminderValue
  };
};

AddReminderInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReminderInput);

export default AddReminderInput;