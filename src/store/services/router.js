import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/docs/v2',
  headers: {
    Accept: 'application/json',
  },
});

export const pokemon = {
  getOne: '/pokemon/:id',
  getAll: '/pokemon/',
};