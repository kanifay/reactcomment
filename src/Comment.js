import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import CommentForm from './CommentForm';
//import CommentList from './CommentList';

class Comment extends Component {

    render() {
        
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          
          {this.props.children}
        </div>
      );
    }
  }
  export default Comment;
