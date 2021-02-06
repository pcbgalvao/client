import streams from '../apis/streams';
import * as ACTION from '../actions/types';
import history from '../history';

export const signIn = (userId) => {
  return {
    type: ACTION.SIGN_IN,
    payload: userId
  };
}

export const signOut = () => {
  return {
    type: ACTION.SIGN_OUT
  };
}

export const changeAuth = () => {
}

export const createStream = formValues => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const response = await streams.post('/streams', {...formValues, userId});

  dispatch({ type:  ACTION.CREATE_STREAM, payload: response.data });
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type:  ACTION.FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: ACTION.FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: ACTION.EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete (`/streams/${id}`);

  dispatch ({type: ACTION.DELETE_STREAM, payload: id});
}
