const initialState = {
  test: {
    status: 0,
    message: "",
    data: {},
  },
  movies: {
    status: 0,
    message: "",
    data: {},
  },
  movieQuotes: {
    status: 0,
    message: "",
    data: {},
  },
  characters: {
    status: 0,
    message: "",
    data: {}
  },
  characterQuotes: {
    status: 0,
    message: "",
    data: {}
  },
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        test: {
          status: 2,
          data: action.payload
        }
        
      }
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: {
          status: 1,
          message: "fetching",
          data: {}
        }
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: {
          status: 2,
          message: 'success',
          data: action.payload
        }
      };
    case 'FETCH_MOVIES_QUOTES':
      return {
        ...state,
        movieQuotes: {
          status: 1,
          message: "fetching",
          data: {}
        }
      };
    case 'FETCH_MOVIES_QUOTES_SUCCESS':
      return {
        ...state,
        movieQuotes: {
          status: 2,
          message: 'success',
          data: action.payload
        }
      };
    case 'FETCH_CHARACTERS':
      return {
        ...state,
        characters: {
          status: 1,
          message: "fetching",
          data: {}
        }
      };
    case 'FETCH_CHARACTERS_SUCCESS':
      return {
        ...state,
        characters: {
          status: 2,
          message: 'success',
          data: action.payload
        }
      };
    case 'FETCH_CHARACTERS_QUOTES':
      return {
        ...state,
        characterQuotes: {
          status: 1,
          message: "fetching",
          data: {}
        }
      };
    case 'FETCH_CHARACTERS_QUOTES_SUCCESS':
      return {
        ...state,
        characterQuotes: {
          status: 2,
          message: 'success',
          data: action.payload
        }
      };
    default:
      return state
  }
}
