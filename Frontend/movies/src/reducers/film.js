const initialState = {
    lastPage: 1,
    currentPage: 1,
    films: [],
};

export function filmReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_FILMS_SUCCESS':
            return { ...state, films: action.payload};
        case 'GET_PAGE_SUCCESS':
            return { ...state, currentPage: action.payload };
        case 'GET_FILMS_FAIL':
            return { ...state, films: action.payload };

    default:
      return state
  }
}