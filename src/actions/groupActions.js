import * as types from './actionTypes';
import axios from 'axios';

export function loadGroupsSuccess(groups) {
  return {
    type: types.LOAD_GROUPS_SUCCESS,
    groups: groups
  }
}

export function loadGroups() {
  return function (dispatch) {
    var config = {
      headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTMwNjk5ODEsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MzA0MTU4MSwibmJmIjoxNDkzMDQxNTgxLCJqdGkiOiI1NmIyOGYyM2ExN2I2ZWQ2YTZjM2RlZGM4NzY2OTQzMyJ9.BRPDbiutjebUDV2bx-cVptHA3z9bOJD6uLG_xf89bB8'}
    };
    return axios.get('https://project-2-ltu-06.herokuapp.com/groups', config)
      .then(response => {
        dispatch(loadGroupsSuccess(response.data));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
}