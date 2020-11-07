import {all} from 'redux-saga/effects';
export default function* rootSaga() {
  console.log('Root saga is running');
  yield all([]);
}
