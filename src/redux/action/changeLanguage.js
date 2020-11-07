import * as types from './actionTypes';

export const changeLanguage = (language) => {
  return {
    type: types.CHANGE_LANGUAGE,
    language,
  };
};
