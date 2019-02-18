import axios from 'axios';
export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS';
export const GET_ACTUAL_GENRE = 'GET_ACTUAL_GENRE';

const apiGenresUrl = 'http://127.0.0.1:8000/api/genres/';


export const getGenres = () => {
    return function (dispatch) {
        axios.get(apiGenresUrl).then(resourse => {
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

export const setActualGenre = (genres) => {
    return function (dispatch) {
        dispatch({
                type: GET_ACTUAL_GENRE,
                payload: genres,
            })
        }
};
