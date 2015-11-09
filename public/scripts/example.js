'use strict';
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm/>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
    <div className='commentList'>
      Hello World! I am a CommentList.
    </div>
    );
  }
});


var CommentForm = React.createClass({
  render: function() {
    return (
      <div className='commentForm'>
        Hello World! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
  return (
    <div className='comment'>
      <h2 className='commentAuther'>
        {this.props.author}
      </h2>
      {this.props.children}
    </div>
  );
});



ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);
