import * as types from './actionTypes';
import axios from 'axios';

const root_url = 'https://project-2-ltu-06.herokuapp.com/';
const config = {
    headers: {'Authorization': `Bearer ${sessionStorage.jwt}`}
};

export function loadTeachersSuccess(teachers){
    return {
        type: types.LOAD_TEACHERS_SUCCESS,
        teachers: teachers
    }
}

export function loadTeachers() {
    return function (dispatch) {

        return axios.get(root_url + 'teachers', config)
            .then(response => {
                dispatch(loadTeachersSuccess(response.data.data));
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
}