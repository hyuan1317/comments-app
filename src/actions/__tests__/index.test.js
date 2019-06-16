import actions from 'actions';
import types from 'actions/types';

describe('saveComment', () => {
    it('has the correct type', () => {
        const action = actions.saveComment();
        expect(action.type).toEqual(types.SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const action = actions.saveComment('New Comment');
        expect(action.comment).toEqual('New Comment');
    });
});
