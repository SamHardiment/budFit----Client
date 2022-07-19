import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { default as Reducer } from './redux/reducer';

const store = createStore(Reducer, composeWithDevTools());

export default store;
