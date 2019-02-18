const initialState = {
    actualGenre: "",
    currentPage: 1,
    lastPage: "",
    films: [],
};

export function filmReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PAGE_SUCCESS':
            return { ...state, currentPage: action.payload};
        case 'GET_FILMS_SUCCESS':
            return { ...state, films: action.payload, lastPage: action.lastPage};
        case 'GET_ACTUAL_GENRE':
            return { ...state, actualGenre: action.payload };

    default:
      return state
  }
}