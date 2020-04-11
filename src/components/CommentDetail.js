import React from 'react';
import faker from 'faker';

const CommentDetail =()=> {
    return (
        <div className="ui container comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()}/>
      </a>
    </div>
    <div className="content">
      <a href="/" class ="author">
        Sam
      </a>
      <div class="metadata">
        <span class="date">
          Today at 6 pm
        </span>
        <div className="comment">
          <h3>Nice post</h3>
        </div>
      </div>
    </div>
   
  </div>
    )
}

export default CommentDetail;