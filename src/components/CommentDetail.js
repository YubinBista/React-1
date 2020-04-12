import React from 'react';


const CommentDetail =(props)=> {
    
    return (
       
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar}/>
      </a>
    <div className="content">
      <a href="/" class ="author">
        {props.author}
      </a>
      <div class="metadata">
        <span class="date">
          {props.date}
        </span>
        </div>
          <div className="text">
              <span className="date">{props.text}</span>
              </div>
        </div>
      </div>
 
    )
}

export default CommentDetail;