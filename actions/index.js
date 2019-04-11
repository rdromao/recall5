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

export const selectReminder = selectReminderId => {
  return {
    type: "SELECT_REMINDER",
    selectReminderId
  };
};


// ASYNC FUNCTIONS
export function fetchRemindersCall() {
  return dispatch => {
    fetch("http://localhost:3000/reminders", {cache: "no-store"})
      .then(res => res.json())
      .then(json => dispatch(receiveReminders(json)))
      .then(error => console.log(error));
  }
}

export function newReminderCall(content) {
  return dispatch => {
    fetch("http://localhost:3000/reminders", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({content: content})
      })
      .then(dispatch(updateNewReminder("")))
      .then(dispatch(fetchRemindersCall()))
      .then(error => console.log(error));
  }
}

export function deleteReminder(id) {
  return dispatch => {
    fetch("http://localhost:3000/reminders/"+id, {method: 'DELETE'})
      .then(dispatch(fetchRemindersCall()))
      .then(error => console.log(error));
  }
}