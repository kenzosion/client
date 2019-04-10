import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  FETCH_STREAM,
  EDIT_STREAM
} from "./types";
import streams from "../apis/streams";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//use streams as axios
export const createStream = formValues => async dispatch => {
  const response = await streams.post('/streams', formValues);

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

//fetching a list 
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

//fetching individual 
export const fetctStream = (id) => async dispatch => {
    const response = await streams.get(`/stream/${id}`);

    dispatch ({ type: FETCH_STREAM, payload: response.data });
} 

export const deleteStream = () => async dispatch => {
    const response = await streams.delete()
}
