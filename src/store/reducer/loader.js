import {createActions, createReducer} from 'reduxsauce';

const INITIAL_STATE = {
  loading: 0,
};

export const {Types, Creators} = createActions({
  startLoading: [],
  stopLoading: [],
});

const startLoading = (state = INITIAL_STATE) => ({
  ...state,
  loading: state.loading + 1,
});

const stopLoading = (state = INITIAL_STATE) => ({
  ...state,
  loading: state.loading - 1,
});

export const loader = {
  [Types.START_LOADING]: startLoading,
  [Types.STOP_LOADING]: stopLoading,
};

export default createReducer(INITIAL_STATE, loader);
