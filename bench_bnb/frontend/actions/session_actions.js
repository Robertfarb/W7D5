export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as SessionApi from '../util/session_api_util';

export const login = formUser => dispatch => (
  SessionApi.login(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
  SessionApi.logout()
  .then(() => dispatch(logoutCurrentUser()))
);

export const signup = (formUser) => dispatch => (
  SessionApi.signup(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))
);

export const receiveCurrentUser = currentUser => dispatch => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => dispatch => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => dispatch => ({
  type: RECEIVE_ERRORS,
  errors
});
