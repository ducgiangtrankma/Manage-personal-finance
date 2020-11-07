import * as types from './actionTypes';

export const changeFontSize = (sizeScale) => {
  return {
    type: types.CHANGE_FONTS_SIZE,
    payload: {sizeScale},
  };
};
