import * as types from '../action/actionTypes';
const initialState = {
  language: 'vi',
};
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LANGUAGE: {
      return {language: action.language};
    }
    default:
      return state;
  }
};
export default languageReducer;
