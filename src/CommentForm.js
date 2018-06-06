import React, { Component } from 'react';

import './App.css';
class CommentForm extends Component {
    render() {
      return (<form className="commentForm" onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={this.state.author}
        onChange={this.handleAuthorChange}
      />
      <input
        type="text"
        placeholder="Say something..."
        value={this.state.text}
        onChange={this.handleTextChange}
      />
      <input type="submit" value="Post" />
    </form>);
    }
  }
  
  export default CommentForm;
  