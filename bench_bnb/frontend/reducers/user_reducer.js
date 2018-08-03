import {RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const userReducer = (state, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
};

export default userReducer;
