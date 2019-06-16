import React from 'react';
import { connect } from 'react-redux';

function CommentList(props) {
    const renderComments = () => {
        return props.comments.map((comment) => (
            <li key={comment}>{comment}</li>
        ));
    };
    return (
        <div>
            <ul>
                {renderComments()}
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => ({
    comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);