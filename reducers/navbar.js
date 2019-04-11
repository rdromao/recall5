const initialState = {
    isLoading: true
  };
  
  const navbar = (state = initialState, action) => {
    switch (action.type) {
      case "RELOAD_HOME":
        return {
          ...state,
          isLoading: !state.isLoading
        };
      default:
        return state;
    }
  };
  
  export default navbar;