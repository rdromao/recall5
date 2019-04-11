const initialState = {
    isLoading: true,
    list: [],
    selectedId: null,
    addReminderValue: ""
  };
  
  const reminders = (state = initialState, action) => {
    console.log("In reminders reducer");
    switch (action.type) {
      case "FETCH_REMINDERS":
        console.log("Fetching!!!..");
        return {
          ...state,
          isLoading: true
        };
      case "RECEIVE_REMINDERS":
        console.log("Reminders fetched: ");
        console.log(state.list);
        return {
          ...state,
          isLoading: false,
          list: action.reminders
        };
      case "UPDATE_NEW_REMINDER":
        return {
          ...state,
          addReminderValue: action.newReminderValue
        };
      case "SELECT_REMINDER":
        return {
          ...state,
          selectedId: action.selectReminderId
        };
      case "ADD_REMINDER":
        return {
          ...state,
          list: [...state.list, state.addReminderValue],
          addReminderValue: initialState.addReminderValue
        };
      default:
        console.log("In reminders reducer default. Nothing to do");
        return state;
    }
  };
  
  export default reminders;