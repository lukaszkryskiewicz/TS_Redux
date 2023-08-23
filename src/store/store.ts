import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducersIndex';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
