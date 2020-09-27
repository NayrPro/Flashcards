import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Quizz(props) {
      
  const [showResponse, setShowResponse] = useState(false)
  
  const {word, wordInput, wordMatch, vocab, score} = useSelector(state => ({...state.wordReducer}))
  const {vocabDatas} = useSelector(state => ({...state.interfaceReducer}))
  
  const dispatch = useDispatch()

  function scoreUpdate() {
    if(word !== "" && wordInput.toLowerCase().trim() === wordMatch.toLowerCase().trim()){
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
      <h2 className="mb-4 text-center">{word}</h2>
        { showResponse === true ? 
          <React.Fragment>
            {wordInput.toLowerCase().trim() !== wordMatch.toLowerCase().trim() && <h2 className="mb-4 text-center text-danger" style={{textDecoration: "line-through"}}>{wordInput}</h2>}
            <h2 className="mb-4 text-center" style={{color: wordInput.toLowerCase().trim() === wordMatch.toLowerCase().trim() && "green"}}>{wordMatch}</h2>
            <button className="mb-4" onClick={() =>  wordCheck()} id="button">
              {vocab.length === 0 ? "Finish" : "Next word"}  
            </button>
          </React.Fragment>
          :
          <React.Fragment>
            <input className="mb-4" type="text" name="mot" value={wordInput} onChange={(e)=> dispatch({type: "WORDINPUT", payload: e.target.value})} />
            <button className="mb-4" onClick={() =>  setShowResponse(true)} id="button">
              Validate
            </button>
          </React.Fragment>
        }
      <button 
        onClick={() =>{ 
          dispatch({type:"VOCAB", payload:vocabDatas})
          dispatch({type: "MENU", payload: "on"})
          dispatch({type: "WORDINPUT", payload: ""})
        }} id="button">
          Back to Menu
      </button>
    </div>
    )
}
