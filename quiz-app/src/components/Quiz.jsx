import React from 'react'
import { qBank } from '../Data'
import { useState } from 'react';

const Quiz = () => {
  const [qid,setQid]=useState(0);
  const [isDisabled,setIsDisabled]=useState(true);
  function handlePrevious(){
    if(qid>0)
    setQid(qid-1)
  }
  function handleNext(){
    if(qid<(qBank.length-1))
    setQid(qid+1)
  }
  return (
    <div class="quiz-container">
      <div class="quiz">
    <div >Quiz App</div>
   <div> Question {qBank[qid].id}: {qBank[qid].ques}</div>
   <div><input type="radio" name="opt"/>{qBank[qid].opt1}</div>
   <div><input type="radio" name="opt"/>{qBank[qid].opt2}</div>
   <div><input type="radio" name="opt"/>{qBank[qid].opt3}</div>
   <div><input type="radio" name="opt"/>{qBank[qid].opt4}</div>
   <div> 
    <button id="previous" onClick={handlePrevious}>Previous</button>
    <button id="next" onClick={handleNext}>Next</button>
    <button id="submit" disabled={true}>Submit</button></div>
   </div>
   </div>
  )
}

export default Quiz