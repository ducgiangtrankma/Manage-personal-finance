import * as types from '../action/actionTypes';
const initialState = {
  sizeScale: 1,
};
const fontsSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_FONTS_SIZE: {
      return {
        sizeScale:
          action.payload.sizeScale === 1
            ? 1.3
            : action.payload.sizeScale === -1
            ? 0.8
            : 1,
      };
    }
    default:
      return state;
  }
};
export default fontsSizeReducer;
