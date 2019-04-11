import fetch from "cross-fetch";

export const reloadHome = () => {
  return {
    type: "RELOAD_HOME"
  };
};

export const fetchReminders = () => {
  return {
    type: "FETCH_REMINDERS"
  };
};

export const receiveReminders = reminders => {
  console.log("In receiveReminder action");
  return {
    type: "RECEIVE_REMINDERS",
    reminders
  };
};

export const updateNewReminder = newReminderValue => {
  return {
    type: "UPDATE_NEW_REMINDER",
    newReminderValue
  };
};

export const addReminder = () => {
  return {
    type: "ADD_REMINDER"
  };
};

// ASYNC FUNCTIONS
export function fetchRemindersCall() {
  console.log("Calling fetch reminders call");
  return dispatch => {
    fetch("https://recall5--rdromao.repl.co/reminders")
      .then(res => res.json())
      .then(json => dispatch(receiveReminders(json)))
      .then(error => console.log(error));
  };
  /*return dispatch => {
    console.log("Dispatching receiveReminders");
    dispatch(receiveReminders(["uno", "dos"]));
  };*/
}