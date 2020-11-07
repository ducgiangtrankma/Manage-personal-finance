import {call} from 'redux-saga/effects';
export function* flowRequest(
  url = '',
  options = {},
  flow = {},
  defaultFlow = () => {},
) {
  const res = yield call(fetch, url, options);
  const data = yield res.json();
  if (flow.hasOwnProperty(res.status)) {
    yield flow[res.status](data, res);
  } else {
    yield defaultFlow(data, res);
  }
}
