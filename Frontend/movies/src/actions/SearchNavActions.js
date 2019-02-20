export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';

export const changeSearchForm = (text) => {
    return function (dispatch) {
        dispatch({
                type: SET_SEARCH_INPUT,
                payload: text,
            })
        }
};