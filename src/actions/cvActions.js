import * as types from './actionTypes';
import axios from 'axios';

const root_url = 'https://project-2-ltu-06.herokuapp.com/';
const config = {
  headers: {'Authorization': `Bearer ${sessionStorage.jwt}`}
};

export function loadCvsSuccess(cvs) {
  return {
    type: types.LOAD_CVS_SUCCESS,
    cvs: cvs
  }
}

export function loadCvs() {
  return function (dispatch) {
    return axios.get(root_url + 'cvs', config)
      .then(response => {
        dispatch(loadCvsSuccess(response.data.data));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
}