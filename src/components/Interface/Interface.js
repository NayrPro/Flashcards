import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { string, number } from 'yup';

export default function Interface() {

    const {motherLanguage, foreignLanguage, wordsNumber, showModalList} = useSelector(state => ({...state.interfaceReducer}))

    

    const dispatch = useDispatch()

    const [disable, setDisable] = useState(true)

    let yup = require('yup');

    let schema = yup.object().shape({
        motherLanguage: yup.string().required(),
        foreignLanguage: yup.string().required(),
        wordsNumber: yup.number().required().positive().integer(),
      });

    useEffect(() => {
        motherLanguage !== "" && foreignLanguage !== "" && wordsNumber > 0 ? setDisable(false) : setDisable(true)
    }, [motherLanguage, foreignLanguage, wordsNumber])  

    return (
        <div>
            <h1>Options: </h1><br/>
            
            <label htmlFor="motherLanguage">Mother language</label><br/>
            <input name="motherLanguage" onChange={(e)=> dispatch({type: "MOTHER", payload: e.target.value})} type="text" value={motherLanguage}/>
            <br/><br/>
            
            <label htmlFor="foreignLanguage">Foreign language</label><br/>
            <input name="foreignLanguage" onChange={(e)=> dispatch({type: "FOREIGN", payload: e.target.value})} type="text" value={foreignLanguage}/>
            <br/><br/>
            
            <label htmlFor="wordsNumber">Number of words to add: </label>
            <br/><br/>
            <input type="number" name="wordsNumber" onChange={(e) => dispatch({type: "NUMBER", payload: e.target.value})} value={wordsNumber}/>
            <br/><br/>
            
            <button disabled={disable} onClick={() => dispatch({type: "MODAL", payload: !showModalList})}>Validate</button>
        </div>
    )
}
