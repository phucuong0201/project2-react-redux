import * as types from './actionTypes';
import axios from 'axios';

const root_url = 'https://project-2-ltu-06.herokuapp.com/';
// const config = {
//   headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTMwNjk5ODEsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MzA0MTU4MSwibmJmIjoxNDkzMDQxNTgxLCJqdGkiOiI1NmIyOGYyM2ExN2I2ZWQ2YTZjM2RlZGM4NzY2OTQzMyJ9.BRPDbiutjebUDV2bx-cVptHA3z9bOJD6uLG_xf89bB8'}
// };

export function loadUsersSuccess (users) {
  return {
    type: types.LOAD_USERS_SUCCESS,
    users: users
  }
}

export function createUserSuccess(user) {
  return {
    type: types.CREATE_USER_SUCCESS,
    user: user
  }
}

export function updateUserSuccess(user) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    user: user
  }
}

export function loadUsers() {
  return function(dispatch) {
    return axios.get(root_url + 'users')
      .then(response => {
        dispatch(loadUsersSuccess(response.data));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
}

export function saveUser(user) {
  return function(dispatch, getState) {
    return axios.post(root_url + 'create_user', {
      username: user.username
    }).then(response => {
      user.username ? dispatch(updateUserSuccess(user)) :
        dispatch(createUserSuccess(user));
      // console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
  }
}

