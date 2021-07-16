import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogger} from 'redux-logger';
import {persistCombineReducers, persistStore} from 'redux-persist';
import rpm from 'redux-promise-middleware';
import Thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import _reducer from '../_reducer';

const config = {
  key: 'primary',
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(config, _reducer);
const logger = createLogger({});
const enhancers = applyMiddleware(logger, rpm, Thunk);

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools(enhancers));
  let persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
