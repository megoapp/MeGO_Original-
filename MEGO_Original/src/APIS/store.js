import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWares = [ReduxThunk];

const store = createStore(
  rootReducer,
  {}, // default state of the application
  compose(applyMiddleware(...middleWares)),
);

export default store;
