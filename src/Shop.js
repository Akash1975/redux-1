import { applyMiddleware, createStore } from 'redux';
import reducers from './State/reducers/Index';
import thunk from 'redux-thunk';

export const shop = createStore(reducers, {}, applyMiddleware(thunk))