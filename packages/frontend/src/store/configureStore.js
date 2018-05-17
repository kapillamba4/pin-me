import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import allReducers from '../reducers';

export default createStore(combineReducers({
  ...allReducers
}), applyMiddleware(thunk, createLogger()));
