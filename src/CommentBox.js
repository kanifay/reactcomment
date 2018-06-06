import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CommentForm from './CommentForm';
import CommentList from './CommentList';



class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <h1>WOO My Comment Box</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
