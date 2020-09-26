import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Quizz(props) {
    
    const [showResponse, setShowResponse] = useState(false)

    const {word, wordInput, wordMatch, vocab, score} = useSelector(state => ({...state.wordReducer}))

    const dispatch = useDispatch()
    
    function scoreUpdate() {
      if(word !== "" && wordInput === wordMatch){
        const newScore = score
        dispatch({type: "SCORE", payload: newScore+1})
      }
    }

    function wordCheck() {
          setShowResponse(false)
          dispatch({type: "WORDINPUT", payload: ""})
          scoreUpdate()      
          vocab.length > 0 ? props.nextWord() : dispatch({type: "MENU", payload: "on"})
    }


    return (
      <div className="card interface">
        { showResponse === true ? 
          <React.Fragment>
            <h2 className="mb-4 text-center">{word}</h2>
            <h2 className="mb-4">Answer:</h2>
            <h2 className="mb-4 text-center">{wordMatch}</h2>
            <button onClick={() =>  wordCheck()} id="button">
              Next word
            </button>
          </React.Fragment>
          :
          <React.Fragment>
            <h2 className="mb-4 text-center">{word}</h2>
            <input className="mb-4" type="text" name="mot" value={wordInput} onChange={(e)=> dispatch({type: "WORDINPUT", payload: e.target.value})} />
            <br />
            <br />
            <button onClick={() =>  setShowResponse(true)} id="button">
              Validate
            </button>
          </React.Fragment>
        }
      </div>
    )
}
