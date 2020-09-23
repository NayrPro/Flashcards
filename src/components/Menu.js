import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import todosData from './vocabArray'

export default function Menu() {
    const {vocab, score} = useSelector(state => ({...state.wordReducer}))

    const {motherLanguage, foreignLanguage} = useSelector(state => ({...state.interfaceReducer}))


    const dispatch = useDispatch()
    
    function language(event, languageInput) {
        vocab.length === 0 && dispatch({type:"VOCAB", payload:todosData})
        dispatch({type:"SELECT", payload:event.target.id})
        dispatch({type:"INPUT", payload:languageInput})
        dispatch({type:"MENU", payload:"off"})
        dispatch({type: "SCORE", payload: 0})
    }

    function scoreMessage(){
        return(
            <React.Fragment>
                <h1>The End</h1>
                <p>You score is {score}/{todosData.length}</p>
            </React.Fragment>
        ) 
    }

    return (
        <div>
            {vocab.length > 0 ? <h1>Language :</h1> : scoreMessage()}
            <button onClick={(e) => language(e, motherLanguage)} id={foreignLanguage}>
                {foreignLanguage}
            </button>
            <br />
            <br />
            <button onClick={(e) => language(e, foreignLanguage)} id={motherLanguage}>
                {motherLanguage}
            </button>
      </div>
    )
}
