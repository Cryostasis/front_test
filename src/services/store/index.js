import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';

import { persistStore, autoRehydrate } from 'redux-persist'

export const history = createHistory();

const composeEnhancers = (
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
    autoRehydrate()
);

let store = createStore(reducers, undefined, enhancer);

export function rehydrate(_store, _config, _callback) {
  persistStore(_store, _config, _callback);
}

export default store;

// export default createStore(reducers, {}, composeEnhancers(
//   applyMiddleware(thunk),
//   applyMiddleware(routerMiddleware(history)),
// ));
