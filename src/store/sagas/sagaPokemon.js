import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import {Creators as pokemonActions} from '~/store/reducers/pokemon';
import {
  getAll,
  getOne,
} from '../services/pokemon/pokemon';

function* doGetAllPokemon() {
  try {
    const {data} = yield call(getAll);
    yield put(pokemonActions.getAllPokemonSuccess(data));
  } catch (error) {
    console.error('Erro buscar pokemons : ', error);
  }
}

function* doGetOnePokemon({ id }) {
  try {
    const {data} = yield call(getOne, id);
    yield put(pokemonActions.getOnePokemonSuccess(data));
  } catch (error) {
    console.error('Erro buscar pokemon : ', error);
  }
}

function* SagaPokemon() {
  yield all([
    takeLatest('GET_ALL_POKEMON', doGetAllPokemon),
    takeLatest('GET_ONE_POKEMON', doGetOnePokemon),
  ]);
}

export default SagaPokemon;
