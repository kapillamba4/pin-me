import axios from 'axios';

const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
};

export default {
  addPin: (details) => {},
  getPin: (details) => {
    return (dispatch, getState) => {
      dispatch({ type: 'GET_PINS_REQUEST' });
      let { title, page } = details;
      title = title || '';

      axios
        .post(`${process.env.REACT_APP_SERVER}pins/search?title=${title}&page=${page}`)
        .then((data) => dispatch({ type: 'GET_PINS_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'GET_PINS_FAILURE', error }));
    };
  }
};
