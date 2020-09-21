import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Quizz(props) {
    const {word, wordInput, wordMatch, vocab, score} = useSelector(state => ({...state.wordReducer}))

    const dispatch = useDispatch()
    
    function scoreUpdate() {
      if(word !== "" && wordInput === wordMatch){
        const newScore = score
        dispatch({type: "SCORE", payload: newScore+1})
      }
    }

    function wordCheck() {
          dispatch({type: "WORDINPUT", payload: ""})
          scoreUpdate()      
          vocab.length > 0 ? props.nextWord() : dispatch({type: "MENU", payload: "on"})
    }


    return (
      <div>
        <h1>{word} {score}</h1>
        <input type="text" name="mot" value={wordInput} onChange={(e)=> dispatch({type: "WORDINPUT", payload: e.target.value})} />
        <br />
        <br />
        <button onClick={() =>  wordCheck()} id="button">
          Valider
        </button>
      </div>
    )
}
