import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBox from './CommentBox';
//import CommentForm from './CommentForm';
//import CommentList from './CommentList';
import registerServiceWorker from './registerServiceWorker';

var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
  ];
  

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('root')
  );
registerServiceWorker();
