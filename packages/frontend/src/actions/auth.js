import axios from 'axios';

const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
};

export default {
  login: (loginCredentials) => {
    return (dispatch, getState) => {
      dispatch({ type: 'LOGIN_REQUEST' });

      axios
        .post(`${process.env.REACT_APP_SERVER}auth/login`, loginCredentials, config)
        .then((data) => dispatch({ type: 'LOGIN_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'LOGIN_FAILURE', error }));
    };
  },
  register: (registerCredentials) => {
    return (dispatch, getState) => {
      dispatch({ type: 'REGISTER_REQUEST' });

      axios
        .post(`${process.env.REACT_APP_SERVER}auth/register`, registerCredentials, config)
        .then((data) => dispatch({ type: 'REGISTER_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'REGISTER_FAILURE', error }));
    };
  },
  logout: () => {
    return (dispatch, getState) => {
      dispatch({ type: 'LOGOUT_REQUEST' });

      axios
        .get(`${process.env.REACT_APP_SERVER}auth/logout`, config)
        .then((data) => dispatch({ type: 'LOGOUT_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'LOGOUT_FAILURE', error }));
    };
  },
  openLoginPopup: () => {
    return (dispatch, getState) => {
      dispatch({ type: 'OPEN_LOGIN_POPUP' });
    };
  },
  openRegisterPopup: () => {
    return (dispatch, getState) => {
      dispatch({ type: 'OPEN_REGISTER_POPUP' });
    };
  },
  closePopup: () => {
    return (dispatch, getState) => {
      dispatch({ type: 'CLOSE_POPUP' });
    };
  }
};
