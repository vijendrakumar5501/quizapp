import React, { useState } from "react";
import QuizScreen from './Components/QuizScreen';
import JoinScreen from './Components/JoinScreen'
import Navbar from "./Components/Navbar";

const App=()=>{
  const [isQuizStarted,setIsQuizStarted]=useState(false)
  return(
   <div className="App">
    <Navbar/>
    <div className="quiz-container">
      {
        isQuizStarted?(
          <QuizScreen retry={()=>setIsQuizStarted(false)} />
        ):(
          <JoinScreen start={()=>setIsQuizStarted(true)}  />
        )
      }
    </div>
   </div>
  )
}

export default App;
  