import * as types from './actionTypes';
import axios from 'axios';

const root_url = 'https://project-2-ltu-06.herokuapp.com/';
const config = {
  headers: {'Authorization': `Bearer ${sessionStorage.jwt}`}
};

export function loadGroupsSuccess(groups) {
  return {
    type: types.LOAD_GROUPS_SUCCESS,
    groups: groups
  }
}

export function loadGroups() {
  return function (dispatch) {

    return axios.get(root_url + 'groups', config)
      .then(response => {
        dispatch(loadGroupsSuccess(response.data));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
}