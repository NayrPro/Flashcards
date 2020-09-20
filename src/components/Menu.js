import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import todosData from '../todosData'

export default function Menu() {
    const {vocab} = useSelector(state => ({...state.wordReducer}))

    const dispatch = useDispatch()
    
    function language(event, languageInput) {
        vocab.length === 0 && dispatch({type:"VOCAB", payload:todosData})
        dispatch({type:"SELECT", payload:event.target.id})
        dispatch({type:"INPUT", payload:languageInput})
        dispatch({type:"MENU", payload:"off"})
    }

    return (
        <div>
            {vocab.length > 0 ? <h1>Langue :</h1> : <h1>Fin</h1>}
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
