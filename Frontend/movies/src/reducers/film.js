const initialState = {
    actualGenre: "",
    currentPage: 1,
    lastPage: "",
    films: [],
    searchText: "",
    time_frame: {
        start_date: 1875,
        end_date: 2019,
    }
};

export function filmReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PAGE_SUCCESS':
            return { ...state, currentPage: action.payload};
        case 'GET_FILMS_SUCCESS':
            return { ...state, films: action.payload, lastPage: action.lastPage};
        case 'SET_ACTUAL_GENRE':
            return { ...state, actualGenre: action.payload };
        case 'SET_DATE':
            return {...state, time_frame: {start_date: action.payload.min, end_date: action.payload.max} };
        case 'SET_SEARCH_INPUT':
            return {...state, searchText: action.payload};

    default:
      return state
  }
}