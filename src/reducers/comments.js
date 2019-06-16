import commentsTypes from 'actions/types';

const initialState = [];
const comments = (state = initialState, action) => {
    switch (action.type) {
        case commentsTypes.SAVE_COMMENT:
            return [...state, action.comment];
        case commentsTypes.FETCH_COMMENTS:
            return [...state, ...action.payload.data.map((comment) => comment.name)]
        default:
            return state;
    }
}

export default comments;
