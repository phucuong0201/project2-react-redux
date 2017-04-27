import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function teacherReducer(state = initialState.teachers, action) {
    //BECAUSE WE WILL START WITH NO USERS, BUT MANY USERS WILL COME!!!
    switch (action.type) {
        case types.LOAD_TEACHERS_SUCCESS: {
            return action.teachers;
        }
        default:
            return state;
    }
}