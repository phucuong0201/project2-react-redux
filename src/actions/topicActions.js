import * as types from './actionTypes';
import axios from 'axios';

const root_url = 'https://project-2-ltu-06.herokuapp.com/';
var config = {
  headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTMyMTIzNDMsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MzE4Mzk0MywibmJmIjoxNDkzMTgzOTQzLCJqdGkiOiI5MjBmOGQxZjk4ZjBmYjhkZDg3YTMzNzIwYWYwOGQwMiJ9.lSFcAphdT22fRSfNjH2ansCYqPKdRucX4gvQlyz3Vjg'}
};

export function loadTopicsSuccess(topics) {
  return {
    type: types.LOAD_TOPICS_SUCCESS,
    topics: topics
  }
}

export function loadTopics() {
  return function (dispatch) {
    return axios.get(root_url + 'topics', config)
      .then(response => {
        dispatch(loadTopicsSuccess(response.data.data));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
}