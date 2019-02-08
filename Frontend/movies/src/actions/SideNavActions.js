import axios from 'axios';
export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS';

const apiUrl = 'http://127.0.0.1:8000/api/genres/';

export const getGenres = () => {
    return function (dispatch) {
        axios.get(apiUrl).then(resourse => {
            dispatch({
                type: GET_GENRES_SUCCESS,
                payload: resourse.data,
            })
        })
        .catch(error => {
            throw(error.response);
        });
        }
};