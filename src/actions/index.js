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

//fetching individual (id)
export const fetctStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch ({ type: FETCH_STREAM, payload: response.data });
}; 

//editing takes two params (id)
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);

    dispatch ({ type: EDIT_STREAM, payload: response.data });
};

//deleting (id)
export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch ({type: DELETE_STREAM, payload: id});
};

