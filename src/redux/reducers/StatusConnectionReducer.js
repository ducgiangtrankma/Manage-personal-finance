import * as types from '../action/actionTypes';
const initialState = {
  statusConnect: true,
};
const statusConnectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_STATUS_CONNECTION: {
      return {statusConnect: action.payload.status};
    }
    default:
      return state;
  }
};
export default statusConnectReducer;
