import React from 'react';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';

 
 
import './App.css';

function App() {
  return (
   
    <div className="ui container">
    <ApprovalCard>  
    <CommentDetail 
    author="sam" 
    date="5pm" 
    text="nice"
    avatar={faker.image.avatar()} />
    </ApprovalCard>

    <ApprovalCard>
    <CommentDetail 
    author="man" 
    date="8" 
    text="mice"
    avatar={faker.image.avatar()}/>
    </ApprovalCard>

    <ApprovalCard>
    <CommentDetail 
    author="tam" 
    date="9" 
    text="hice"
    avatar={faker.image.avatar()}/>
    </ApprovalCard>
    </div>
     
  );
}

export default App;
