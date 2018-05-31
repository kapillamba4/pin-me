import axios from 'axios';

export default {
  addComment: (commentDetails) => {
    return (dispatch, getState) => {
      dispatch('ADD_COMMENT_REQUEST');

      axios
        .post(`${process.env.REACT_APP_SERVER}comments/add`, commentDetails)
        .then((data) => dispatch({ type: 'ADD_COMMENT_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'ADD_COMMENT_FAILURE', error }));
    };
  },
  removeComment: (commentDetails) => {
    return (dispatch, getState) => {
      dispatch('REMOVE_COMMENT_REQUEST');

      axios
        .post(`${process.env.REACT_APP_SERVER}comments/remove`, commentDetails)
        .then((data) => dispatch({ type: 'REMOVE_COMMENT_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'REMOVE_COMMENT_FAILURE', error }));
    };
  }
};
