import types from './types';
import axios from 'axios';

const saveComment = (comment) => ({
    comment,
    type: types.SAVE_COMMENT,
});

const fetchComments = () => {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
        payload: response,
        type: types.FETCH_COMMENTS,
    };
};

export default {
    saveComment,
    fetchComments,
};
