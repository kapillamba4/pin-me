const defaultState = {
  loginStarted: false,
  loggedIn: false,
  registrationStarted: false,
  registered: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loginStarted: true,
        loggedIn: false
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loginStarted: false,
        loggedIn: true
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loginStarted: false,
        loggedIn: false
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        registrationStarted: true,
        registered: false
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        registrationStarted: false,
        registered: true
      };
    case 'REGISTER_FAILURE':
      return {
        ...state,
        registrationStarted: false,
        registered: false
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        logoutStarted: true
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        logoutStarted: false,
        loggedIn: false
      };
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        logoutStarted: false
      };
    case 'OPEN_LOGIN_POPUP':
      return {
        ...state
      };
    case 'OPEN_REGISTER_POPUP':
      return {
        ...state
      };
    case 'CLOSE_POPUP':
      return {
        ...state
      };
    default:
      return state;
  }
};
