import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Menu() {
    
    const {vocab, score} = useSelector(state => ({...state.wordReducer}))
    
    const {motherLanguage, foreignLanguage} = useSelector(state => ({...state.interfaceReducer}))
    
    const {vocabDatas} = useSelector(state => ({...state.interfaceReducer}))
    
    const dispatch = useDispatch()

    const [showList, setShowList] = useState(false)

    useEffect(() => {
        console.log(vocabDatas, showList)
    }, [])
    
    function language(event, languageInput) {
        vocab.length === 0 && dispatch({type:"VOCAB", payload:vocabDatas})
        dispatch({type:"SELECT", payload:event.target.id})
        dispatch({type:"INPUT", payload:languageInput})
        dispatch({type:"MENU", payload:"off"})
        dispatch({type: "SCORE", payload: 0})
    }

    function scoreMessage(){
        return(
            <React.Fragment>
                <h2 className="text-center mb-4">Your score is {score}/{vocabDatas.length}</h2>
                <h2 className="mb-4">Continue?</h2>
            </React.Fragment>
        ) 
    }

    const vocabList =  vocabDatas.map(elt =>(
        <tr>
            <td>{elt[motherLanguage]}</td>
            <td>{elt[foreignLanguage]}</td>
        </tr>
    ))

    return (
        <div className="card interface">
            {showList === true && 
                <div className="card interface" style={{position: "absolute"}}>
                    <table>
	                    <thead>
	                    	<tr>
	                    		<th>{motherLanguage}</th>
	                    		<th>{foreignLanguage}</th>
	                    	</tr>
	                    </thead>
	                    <tbody>
	                    	{vocabList}
	                    </tbody>
                    </table>
                    <input onClick={() => setShowList(false)} type="button" value="x"/>
                </div>
            }
            {vocab.length > 0 ? <h2 className="text-center mb-4">Choose a language to be test on :</h2> : scoreMessage()}
            <input className="mb-4" type="button" onClick={(e) => {language(e, motherLanguage)}} id={foreignLanguage}
                 value={foreignLanguage}/>

            <input className="mb-4" type="button" onClick={(e) => {language(e, foreignLanguage)}} id={motherLanguage}
                 value={motherLanguage}/>
            
            <input className="mb-4" type="button" onClick={() => setShowList(true)} 
                 value="Show vocabulary list"/>

            <input className="mb-4" type="button" onClick={() => window.location.reload()} id={motherLanguage}
                 value="Reset"/>            
      </div>
    )
}
