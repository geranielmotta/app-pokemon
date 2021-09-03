import {all} from 'redux-saga/effects';
import SagaPokemon from './sagaPokemon';
import sagaLoader from './sagaLoader';

export default function* rootSaga() {
  yield all([
    SagaPokemon(),
    sagaLoader(),
  ]);
}
