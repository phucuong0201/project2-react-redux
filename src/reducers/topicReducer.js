import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function topicReducer(state = initialState.topics, action) {
  switch (action.type) {
    case types.LOAD_TOPICS_SUCCESS: {
      return action.topics;
    }
    default:
      return state;
  }
}