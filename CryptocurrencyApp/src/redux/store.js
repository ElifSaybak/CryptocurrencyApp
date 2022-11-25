import reactotron from '../config/reactotron';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers';

const rootReducer = combineReducers({userReducer});

export const Store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), reactotron.createEnhancer()),
);
