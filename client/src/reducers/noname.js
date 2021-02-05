import * as ACTION from '../actions/types';

const streamReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION.EDIT_STREAM:
      return state.map(stream => {
        if (stream.id === action.payloiad.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};

const streamReducer = (state={}, action) => {
  switch (action.type) {
    case ACTION.EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;

  }
}