import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../redux/reducers';
import logger from 'redux-logger';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)
