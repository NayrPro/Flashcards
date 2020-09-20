import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Quizz(props) {
    const {word, wordInput, wordMatch, vocab} = useSelector(state => ({...state.wordReducer}))

    const dispatch = useDispatch()

    function handleChange(event) {
        const { value } = event.target;
        dispatch({type: "WORDINPUT", payload: value})
    }

    function wordCheck() {
          dispatch({type: "WORDINPUT", payload: ""})
          vocab.length > 0 ? props.nextWord() : dispatch({type: "MENU", payload: "on"})
    }

    return (
      <div>
        <h1>{word}</h1>
        <input type="text" name="mot" value={wordInput} onChange={handleChange} />
        <br />
        <br />
        <button onClick={() => wordMatch === wordInput && wordCheck()} id="button">
          Valider
        </button>
      </div>
    )
}
