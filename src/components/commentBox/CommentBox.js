import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import commentsActions from 'actions';

function CommentBox(props) {
    const [comment, setComment] = useState('');

    const handleTextAreaChange = (e) => {
        setComment(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.saveComment(comment);
        setComment('');
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={comment} onChange={handleTextAreaChange}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button
                className="fetch-comments"
                onClick={props.fetchComments}
            >
                Fetch Comments
            </button>
        </Fragment>
    );
};



export default connect(null, commentsActions)(CommentBox);