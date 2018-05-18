const defaultState = {
  loginStarted: true,
  loggedIn: false,
  registrationStarted: false,
  registered: false,
  authPopup: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loginStarted: true,
        loggedIn: false,
        authPopup: null
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loginStarted: false,
        loggedIn: true,
        authPopup: null
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loginStarted: false,
        loggedIn: false,
        authPopup: null
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        registrationStarted: true,
        registered: false,
        authPopup: null
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registrationStarted: false,
        registered: true,
        authPopup: null
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        registrationStarted: false,
        registered: false,
        authPopup: null
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        logoutStarted: true,
        authPopup: null
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        logoutStarted: false,
        loggedIn: false,
        authPopup: null
      };
    case "LOGOUT_FAILURE":
      return {
        ...state,
        logoutStarted: false,
        authPopup: null
      };
    case "OPEN_LOGIN_POPUP":
      return {
        ...state,
        authPopup: "login"
      };
    case "OPEN_REGISTER_POPUP":
      return {
        ...state,
        authPopup: "register"
      };
    case "CLOSE_POPUP":
      return {
        ...state,
        authPopup: null
      };
    default:
      return state;
  }
};

