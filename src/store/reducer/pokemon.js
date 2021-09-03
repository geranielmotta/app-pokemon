import {createActions, createReducer} from 'reduxsauce';

const initialState = {
  allPokemon:{},
  onePokemon:{}
};

export const getAllPokemonSuccess = (state = initialState, {data}) => ({
  ...state,
  allPokemon: data,
});

export const getOnePokemonSuccess = (state = initialState, {data}) => ({
  ...state,
  onePokemon: data,
});

export const cleanRegister = (state = initialState) => ({
  ...state,
  onePokemon: [],
});

export const {Types, Creators} = createActions({
  getAllPokemon: [],
  getOnePokemon: ['id'],
});

export const user = {
  [Types.CLEAN_REGISTER]: cleanRegister,
  [Types.GET_ALL_POKEMON_SUCCESS]: getAllPokemonSuccess,
  [Types.GET_ONE_POKEMON_SUCCESS]: getOnePokemonSuccess,
};

export default createReducer(initialState, user);
