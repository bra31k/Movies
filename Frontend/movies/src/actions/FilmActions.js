import axios from 'axios';

export const SET_ACTUAL_GENRE = 'SET_ACTUAL_GENRE';
export const SET_DATE = 'SET_DATE';
export const GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';

const apiUrl = 'http://127.0.0.1:8000/api/films/';

export const getFilms = (page, genres, timeFrame, filter) => {
    return function (dispatch) {
        if (genres !== "" && genres !== 'undefined' && timeFrame !== undefined && filter.length > 0) {
            axios.get(apiUrl, {
                params:
                    {
                        genre: genres,
                        page: page,
                        end_date: timeFrame.end_date.toString()+'-01-01',
                        start_date: timeFrame.start_date.toString()+'-01-01',
                        filter: filter
                    }}).then(res => {
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

    } if (genres !== "" && genres !== 'undefined' && timeFrame !== undefined && filter.length === 0) {
            axios.get(apiUrl, {
                params:
                    {
                        genre: genres,
                        page: page,
                        end_date: timeFrame.end_date.toString() + '-01-01',
                        start_date: timeFrame.start_date.toString() + '-01-01',
                    }
            }).then(res => {
                let films = res.data['results'];
                let lastPage = Math.ceil(res.data['count'] / 9);
                dispatch({
                    type: GET_FILMS_SUCCESS,
                    payload: films,
                    lastPage: lastPage,
                })
            })
                .catch(error => {
                    throw(error.response);
                })
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

export const changeSearchForm = (text) => {
    return function (dispatch) {
        dispatch({
                type: SET_SEARCH_INPUT,
                payload: text,
            })
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
                type: SET_ACTUAL_GENRE,
                payload: genres,
            })
        }
};

export const setReleaseDate = (value) => {
    return function (dispatch) {
        dispatch({
                type: SET_DATE,
                payload: value,
            })
        }
};