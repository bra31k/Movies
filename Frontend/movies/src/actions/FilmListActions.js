import axios from 'axios';
import {GET_ACTUAL_GENRE} from "./SideNavActions";
export const GET_FILTERED_FILMS_SUCCESS = 'GET_FILTERED_FILMS_SUCCESS';
export const GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';

const apiUrl = 'http://127.0.0.1:8000/api/films/';

export const getFilms = (page, genres) => {
    return function (dispatch) {
        if (genres !== "" && genres !== 'undefined') {
            axios.get(apiUrl, {params: {genre: genres, page: page}}).then(res => {
            let films = res.data['results'];
            let lastPage = Math.ceil(res.data['count']/9);
            dispatch({
                type: GET_FILMS_SUCCESS,
                payload: films,
                lastPage: lastPage,
            })
        })
            .catch(error => {
                throw(error.response);
            });
    } else {
            axios.get(apiUrl, {params: {page: page}}).then(res => {
            let films = res.data['results'];
            let lastPage = Math.ceil(res.data['count']/9);
            dispatch({
                type: GET_FILMS_SUCCESS,
                payload: films,
                lastPage: lastPage,
            })
        })
            .catch(error => {
                throw(error.response);
            });
        }
    }
};



export const setCurrentPage = (page) => {
    return function (dispatch) {
        dispatch({
            type: GET_PAGE_SUCCESS,
            payload: page,
            })
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