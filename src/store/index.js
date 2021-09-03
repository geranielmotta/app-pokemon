import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import {persistStore} from 'redux-persist';
import reducers from './reducers';
import sagas from './sagas';
import {Interceptor} from './services/router';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);
store.close = () => store.dispatch(END);
const persistor = persistStore(store);
sagaMiddleware.run(sagas);
Interceptor(store);

export {store, persistor};
