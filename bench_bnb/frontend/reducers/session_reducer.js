import {RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const sessionReducer = (state, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  const _nullState = {
    currentUser: null
  };


  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    case LOGOUT_CURRENT_USER:
      return _nullState;
    default:
      return state;

  }
};

export default sessionReducer;
