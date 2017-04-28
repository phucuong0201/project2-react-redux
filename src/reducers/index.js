import { combineReducers } from 'redux';
import users from './userReducer';
import topics from './topicReducer';
import cvs from './cvReducer';
import groups from './groupReducer';
import session from './sessionReducer';
import teachers from './teacherReducer';

const rootReducer = combineReducers({
  users: users,//CAN OMIT RIGHT HAND SIDE (ES6 short hand property name)
  topics: topics,
  cvs: cvs,
  groups: groups,
  session: session,
  teachers: teachers
});

export default rootReducer;