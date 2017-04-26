import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function groupReducer(state = initialState.groups, action) {
  //BECAUSE WE WILL START WITH NO USERS, BUT MANY USERS WILL COME!!!
  switch (action.type) {
    case types.LOAD_GROUPS_SUCCESS: {
      return action.groups;
    }
    default:
      return state;
  }
}