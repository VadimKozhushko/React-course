import * as types from './types'

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
}

const initialState = {
  gists: [],
  request: STATUSES.IDLE,
  error: null,
};

export const gistsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.GET_GISTS_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
      };
    case types.GET_GISTS_SUCCESS:
      return {
        ...state,
        gists: payload,
        request: STATUSES.SUCCESS,
      };
    case types.GET_GISTS_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: payload,
      };
    default:
      return state;
  }
}