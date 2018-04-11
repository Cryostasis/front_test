import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { auth, authRefreshSet } from './auth';
import rehydrate from './localstore';
import { LOGOUT } from './auth/actions';

const appReducer = combineReducers({
  rehydrate,
  router,
  form,
  auth,
  authRefreshSet,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    delete state.auth;
  }

  return appReducer(state, action)
};

export default rootReducer;
