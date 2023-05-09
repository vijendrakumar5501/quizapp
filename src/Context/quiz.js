import { createContext, useReducer } from "react";
import questions from '../data';

export const QuizContext=createContext();
const initialState={
    questions,
    currentQuestionIndex:0,
};
const state=(state,action)=>{
    return state;
}

//create provider

export const QuizProvider=({children})=>{
    const value=useReducer(state,initialState);
    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}