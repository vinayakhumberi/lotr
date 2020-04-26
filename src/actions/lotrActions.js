import {
  fetchMovieService,
  fetchMovieQuotes,
  fetchCharactersService,
  fetchCharacterQuotes
} from '../services/lotr.services';
export const lotrActions = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
};

export const getListOfMovies = () => async dispatch => {
  dispatch({
    type: 'FETCH_MOVIES'
  });
  let data = await fetchMovieService();
  dispatch({
    type: 'FETCH_MOVIES_SUCCESS',
    payload: data,
  });
};


export const getQuotesOfMovies = (id) => async dispatch => {
  dispatch({
    type: 'FETCH_MOVIES_QUOTES'
  });
  let data = await fetchMovieQuotes(id);
  dispatch({
    type: 'FETCH_MOVIES_QUOTES_SUCCESS',
    payload: {id: id, ...data},
  });
};



export const getListOfCharacters = () => async dispatch => {
  dispatch({
    type: 'FETCH_CHARACTERS'
  });
  let data = await fetchCharactersService();
  dispatch({
    type: 'FETCH_CHARACTERS_SUCCESS',
    payload: data,
  });
};


export const getQuotesOfCharacters = (id) => async dispatch => {
  dispatch({
    type: 'FETCH_CHARACTERS_QUOTES'
  });
  let data = await fetchCharacterQuotes(id);
  dispatch({
    type: 'FETCH_CHARACTERS_QUOTES_SUCCESS',
    payload: { id: id, ...data },
  });
};