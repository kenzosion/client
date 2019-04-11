import  {CREATE_STREAM,
        FETCH_STREAMS,
        DELETE_STREAM,
        FETCH_STREAM,
        EDIT_STREAM }from '../actions/types.js';

export default (state= {}, action ) => {
    switch (action.type) {
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
    
        default:
            return state;
    }
};



export default { state={}, action } => {
    switch (action.type) {

    }
}