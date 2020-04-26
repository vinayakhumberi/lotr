import {
  apiEndPoint,
  apiKey
} from '../config/config';
let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKey}`);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export const fetchMovieService = async() => {
  let response = await fetch(`${apiEndPoint}movie`, requestOptions);
  let data = await response.json()
  return data;
};

export const fetchMovieQuotes = async (id) => {
  let response = await fetch(`${apiEndPoint}movie/${id}/quote`, requestOptions);
  let data = await response.json()
  return data;
};


export const fetchCharactersService = async () => {
  let response = await fetch(`${apiEndPoint}character`, requestOptions);
  let data = await response.json()
  return data;
};


export const fetchCharacterQuotes = async (id) => {
  let response = await fetch(`${apiEndPoint}character/${id}/quote`, requestOptions);
  let data = await response.json()
  return data;
};
