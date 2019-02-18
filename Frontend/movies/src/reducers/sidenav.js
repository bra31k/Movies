const initialState = {
    genres: [],
};

export function sideNavReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_GENRES_SUCCESS':
            return { ...state, genres: action.payload};


    default:
      return state
  }
}