import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import pokemon from './pokemon';
import loader from './loader';

const reducers = persistCombineReducers(
  {
    key: 'app-pokemon',
    storage: AsyncStorage,
    blacklist: ['loader'],
    whitelist: ['pokemon'],
  },
  {
    pokemon,
    loader,
  },
);

export default reducers;
