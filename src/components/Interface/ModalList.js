import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Test from '../Test'

export default function ModalList() {
    
    const {wordsNumber, vocabDatas, motherLanguage, foreignLanguage} = useSelector(state => ({...state.interfaceReducer}))

    const [showTest, setShowTest] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const array = vocabDatas
        for (let index = 0; index < wordsNumber; index++) {
            array.push({id: index, [motherLanguage]: "", [foreignLanguage]: ""})
        }    
        dispatch({type: "DATA", payload: array})
        // eslint-disable-next-line
    }, [])

    function updateVocab(id,language,value) {
        const array = vocabDatas.map(elt => {
            if(elt.id === id){
                elt[language] = value  
            }
            return elt 
        })
        dispatch({type: "DATA", payload: array})
    }

    const vocabForm = vocabDatas.map(elt => (
        <React.Fragment key={elt.id}>
                <h2>Word n°{elt.id+1} </h2>
                <label htmlFor={motherLanguage+elt.id}>{motherLanguage}</label>
                <input type="text" name={motherLanguage+elt.id} onChange={(e) => updateVocab(elt.id,motherLanguage,e.target.value)} 
                value={elt[motherLanguage]}/>

                <label htmlFor={foreignLanguage+elt.id}>{foreignLanguage}</label>
                <input type="text" name={foreignLanguage+elt.id} onChange={(e) => updateVocab(elt.id,foreignLanguage,e.target.value)} value={elt[foreignLanguage]}/>
        </React.Fragment>
    ))

    return (
        <React.Fragment>
        {
            showTest === true ?
            <Test/>
            :
            <div>
                {vocabForm}
                <br/><br/>           
                <button onClick={() => {
                    dispatch({type: "VOCAB", payload: vocabDatas});
                    setShowTest(true)
                }}>Save</button>
            </div>
        }
        </React.Fragment>
    )
}
