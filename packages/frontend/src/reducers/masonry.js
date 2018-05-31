const defaultState = {
  fetchImagesStarted: false,
  masonryColumns: 3,
  heightController: [0, 0, 0],
  data: [[], [], []]
};

const pushNewImage = (imageData, heightController, data) => {
  const idx = heightController.reduce((a, b, i) => (a[0] > b ? [b, i] : a), [Number.MAX_VALUE, -1])[1];

  const transform = (el) => 10000 * el.height / el.width;
  heightController[idx] += transform(imageData);

  data[idx].push({
    ...imageData,
    aspectRatio: imageData.height / imageData.width
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_PAGINATE_REQUEST':
      return {
        ...state,
        fetchImagesStarted: true
      };
    case 'FETCH_PAGINATE_SUCCESS':
      action.data.forEach((imageData) => pushNewImage(imageData, state.heightController, state.data));

      return {
        ...state,
        fetchImagesStarted: false
      };
    case 'FETCH_PAGINATE_FAILURE':
      return {
        ...state,
        fetchImagesStarted: false
      };
    default:
      return state;
  }
};
