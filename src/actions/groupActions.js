import * as types from './actionTypes';
import axios from 'axios';

const root_url = 'https://project-2-ltu-06.herokuapp.com/';
const config = {
  headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTMyNDUzNDUsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MzIxNjk0NSwibmJmIjoxNDkzMjE2OTQ1LCJqdGkiOiIxYzMzNWEzMmJhZGQ4YjNhZmI4M2E1YzZhMGU5MWJhZiJ9.IU1Te9qokWwB9oAE0Cy1FEb5avlL6ke8-O1r36lgDS8'}
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