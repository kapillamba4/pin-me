const defaultState = {
  addPinStarted: false,
  getPinStarted: false,
  downloadPinStarted: false,
  getMyPinsStarted: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PIN_REQUEST':
      return {
        ...state,
        addPinStarted: true
      };
    case 'ADD_PIN_SUCCESS':
      return {
        ...state,
        addPinStarted: false
      };
    case 'ADD_PIN_FAILURE':
      return {
        ...state,
        addPinStarted: false
      };
    case 'GET_PINS_REQUEST':
      return {
        ...state,
        getPinStarted: true
      };
    case 'GET_PINS_SUCCESS':
      return {
        ...state,
        getPinStarted: false
      };
    case 'GET_PINS_FAILURE':
      return {
        ...state,
        getPinStarted: false
      };
    case 'DOWNLOAD_PIN_REQUEST':
      return {
        ...state,
        downloadPinStarted: true
      };
    case 'DOWNLOAD_PIN_SUCCESS':
      return {
        ...state,
        downloadPinStarted: false
      };
    case 'DOWNLOAD_PIN_FAILURE':
      return {
        ...state,
        downloadPinStarted: false
      };
    case 'GET_MY_PINS_REQUEST':
      return {
        ...state,
        getMyPinsStarted: true
      };
    case 'GET_MY_PINS_SUCCESS':
      return {
        ...state,
        getMyPinsStarted: false
      };
    case 'GET_MY_PINS_FAILURE':
      return {
        ...state,
        getMyPinsStarted: false
      };
    case '':
      return {
        ...state
      };
    default:
      return state;
  }
};
