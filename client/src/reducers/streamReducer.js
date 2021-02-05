import _ from 'lodash';
import * as ACTION from '../actions/types';



const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION.FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case ACTION.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case ACTION.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case ACTION.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case ACTION.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  };
};



export default streamReducer;