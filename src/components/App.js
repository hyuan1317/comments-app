import React, { Component } from 'react';
import CommentBox from 'components/commentBox/CommentBox';
import CommentList from 'components/commentList/CommentList';
import 'components/App.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <CommentBox />
            <CommentList />
        </div>
      );
    }
}

export default App;
