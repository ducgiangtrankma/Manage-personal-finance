import * as types from './actionTypes';

export const setStatusConnect = (status) => {
  return {
    type: types.SET_STATUS_CONNECTION,
    payload: {status},
  };
};
