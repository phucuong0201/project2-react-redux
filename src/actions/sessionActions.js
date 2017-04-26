import * as types from './actionTypes';
import axios from 'axios';

const root_url = 'https://project-2-ltu-06.herokuapp.com/';

export function loginSuccess() {
  return {
    type: types.LOG_IN_SUCCESS
  }
}

export function logInUser(credentials) {
  return function (dispatch) {
    return axios.post(root_url + 'auth', {
      username: credentials.username,
      password: credentials.password
    })
      .then(function (response) {
        sessionStorage.setItem('jwt', response.data.token);
        dispatch(loginSuccess());
        console.log("quay len anh em");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT}
}