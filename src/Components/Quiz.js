import React, { useContext } from 'react'
import { QuizContext } from '../Context/quiz'


const Quiz = () => {
  
  const [quizState,dispatch]=useContext (QuizContext);
  console.log(quizState);
  return (
    <div className='score'>
      Question {quizState.currentQuestionIndex+1}/{quizState.questions.length}
    </div>
  )
}

export default Quiz