import axios from 'axios';

export default {
  getMyAlbums: () => {
    return (dispatch, getState) => {
      dispatch('GET_MY_ALBUMS_REQUEST');

      axios
        .get(`${process.env.REACT_APP_SERVER}albums/get`)
        .then((data) => dispatch({ type: 'GET_MY_ALBUMS_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'GET_MY_ALBUMS_FAILURE', error }));
    };
  },
  createAlbum: () => {
    return (dispatch, getState) => {
      dispatch('CREATE_ALBUM_REQUEST');

      axios
        .get(`${process.env.REACT_APP_SERVER}albums/get`)
        .then((data) => dispatch({ type: 'CREATE_ALBUM_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'CREATE_ALBUM_FAILURE', error }));
    };
  },
  addPinToAlbum: () => {
    return (dispatch, getState) => {
      dispatch('ADD_PIN_ALBUM_REQUEST');

      axios
        .get(`${process.env.REACT_APP_SERVER}albums/pins`)
        .then((data) => dispatch({ type: 'ADD_PIN_ALBUM_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'ADD_PIN_ALBUM_FAILURE', error }));
    };
  },
  getPinsFromAlbum: (albumId) => {
    return (dispatch, getState) => {
      dispatch('GET_PINS_ALBUM_REQUEST');

      axios
        .get(`${process.env.REACT_APP_SERVER}albums/pins?album=${albumId}`)
        .then((data) => dispatch({ type: 'GET_PINS_ALBUM_SUCCESS', data }))
        .catch((error) => dispatch({ type: 'GET_PINS_ALBUM_FAILURE', error }));
    };
  }
};
