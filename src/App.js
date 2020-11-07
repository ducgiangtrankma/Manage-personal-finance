import React, {useEffect, useState} from 'react';
import RootNavigation from './navigation/rootnavigation';
import NetInfo from '@react-native-community/netinfo';
//config Redux
import {Provider, useDispatch} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootSaga from './redux/saga/rootSaga';
import createSagaMiddleware from 'redux-saga';
import reducer from './redux/reducers/reducer';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //whitelist: ['auth'],
};
const persistReducerConfig = persistReducer(persistConfig, reducer);
const store = createStore(
  persistReducerConfig,
  applyMiddleware(sagaMiddleware),
);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}
