import axios from 'axios';

export default {
  fetchPaginateImages: (currentPage) => {
    return (dispatch, getState) => {
      dispatch({ type: 'FETCH_PAGINATE_REQUEST' });

      axios
        .get(`${process.env.REACT_APP_SERVER}pins/all?page=${currentPage}`)
        .then((data) => {
          dispatch({
            type: 'FETCH_PAGINATE_SUCCESS',
            data: data.data.rows
          });
        })
        .catch((error) => dispatch({ type: 'FETCH_PAGINATE_FAILURE', error }));
    };
  }
};
