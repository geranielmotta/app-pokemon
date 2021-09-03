import {takeEvery, put, all} from 'redux-saga/effects';
import {Creators as loading} from '~/store/ducks/loader';

function* addLoader() {
  yield put(loading.startLoading());
}

function* removeLoader() {
  yield put(loading.stopLoading());
}

function* SagaLoader() {
  yield all([
    takeEvery('GET_ALL_POKEMON', addLoader),
    takeEvery('GET_ONE_POKEMON', addLoader),
    takeEvery('GET_ALL_POKEMON_SUCCESS', removeLoader),
    takeEvery('GET_ONE_POKEMON_SUCCESS', removeLoader),
  ]);
}

export default SagaLoader;
