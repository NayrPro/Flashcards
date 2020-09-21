import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import todosData from '../todosData'

export default function Menu() {
    const {vocab, score} = useSelector(state => ({...state.wordReducer}))

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
            <button onClick={(e) => language(e, "français")} id="shikomori">
                Shikomori
            </button>
            <br />
            <br />
            <button onClick={(e) => language(e, "shikomori")} id="français">
                Français
            </button>
      </div>
    )
}
