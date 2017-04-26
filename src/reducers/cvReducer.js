import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cvReducer(state = initialState.cvs, action) {
  switch (action.type) {
    case types.LOAD_CVS_SUCCESS: {
      return action.cvs;
    }
    default:
      return state;
  }
}