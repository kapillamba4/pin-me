import axios from 'axios';

export default {
  toggle: (pinDetails) => {
    return (dispatch, getState) => {
      dispatch('TOGGLE_LIKE_REQUEST');

      axios
        .post(`${process.env.REACT_APP_SERVER}likes/toggle`, pinDetails)
        .then((data) => dispatch({ type: 'TOGGLE_LIKE_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'TOGGLE_LIKE_FAILURE', error }));
    };
  }
};
