import axios from 'axios';
export const GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_FAIL = 'GET_FILMS_FAIL';

const apiUrl = 'http://127.0.0.1:8000/api/films/?page=';

export const getFilms = (page) => {
    return function (dispatch) {
        if (page !== undefined) {
           axios.get(`${apiUrl}${page}`).then(res => {
            let films = res.data['results'];
            dispatch({
                type: GET_FILMS_SUCCESS,
                payload: films,
            })
        })
        .catch(error => {
            throw(error.response);
        });
        }
    }
};

export const getCurrentPage = (page, count) => {
    return function (dispatch) {
        dispatch({
            type: GET_PAGE_SUCCESS,
            payload: page,
            })
    }
};