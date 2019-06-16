import commentsReducer from 'reducers/comments';
import commentsTypes from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: commentsTypes.SAVE_COMMENT,
        comment: 'New Comment',
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknow type', () => {
    const newState = commentsReducer([], {});
    expect (newState).toEqual([]);
});