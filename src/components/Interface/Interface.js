import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import './Interface.css'

export default function Interface() {

    const {motherLanguage, foreignLanguage, wordsNumber, showModalList} = useSelector(state => ({...state.interfaceReducer}))

    const dispatch = useDispatch()

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        motherLanguage !== "" && foreignLanguage !== "" && wordsNumber > 0 ? setDisabled(false) : setDisabled(true)
    }, [motherLanguage, foreignLanguage, wordsNumber])  

    return (
        <div className="card border-primary text-center interface">
            <h2 className="d-block mb-4">Create your flashcard set: </h2>
            
            <div className="form-group">
                <div className="form-group">    
                    <label htmlFor="motherLanguage">Mother language:</label>
                    <input name="motherLanguage" onChange={(e)=> dispatch({type: "MOTHER", payload: e.target.value})} type="text" value={motherLanguage}/>
                </div>
                <div className="form-group">
                    <label htmlFor="foreignLanguage">Foreign language:</label>
                    <input name="foreignLanguage" onChange={(e)=> dispatch({type: "FOREIGN", payload: e.target.value})} type="text" value={foreignLanguage}/>
                </div>
                <div className="form-group">
                    <label htmlFor="wordsNumber">Number of words to add: </label>
                    <input type="number" name="wordsNumber" onChange={(e) => dispatch({type: "NUMBER", payload: e.target.value})} value={wordsNumber}/>
                </div>
            </div>
                <input className="btn btn-primary" type="button" disabled={disabled} onClick={() => dispatch({type: "MODAL", payload: !showModalList})}value="Validate"/>
        </div>
    )
}
