import React, {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Test from '../Test'

export default function ModalList() {
    
    const {wordsNumber, vocabDatas, motherLanguage, foreignLanguage} = useSelector(state => ({...state.interfaceReducer}))

    const [showTest, setShowTest] = useState(false)

    const [disabled, setDisabled] = useState(true)

    const dispatch = useDispatch()

    const refs = useRef([])

    useEffect(() => {
        const array = vocabDatas
        for (let index = 0; index < wordsNumber; index++) {
            refs.current[index] = {current1: React.createRef(), current2: React.createRef()}
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
            <div className="form-group mb-4">
                <h2 className="text-center">Word n°{elt.id+1} :</h2>
                <div className="form-group">
                    <label htmlFor={motherLanguage+elt.id}>{motherLanguage}:</label>
                    <input ref={refs.current[elt.id].current1} type="text" name={motherLanguage+elt.id} onChange={(e) => updateVocab(elt.id,motherLanguage,e.target.value)} value={elt[motherLanguage]}/>
                </div>
                <div className="form-group">
                <label htmlFor={foreignLanguage+elt.id}>{foreignLanguage}:</label>
                <input ref={refs.current[elt.id].current2} type="text" name={foreignLanguage+elt.id} onChange={(e) => updateVocab(elt.id,foreignLanguage,e.target.value)} value={elt[foreignLanguage]}/>
                </div>
            </div>
        </React.Fragment>
    ))

    useEffect(() => {
        let isEmpty = false

        refs.current.forEach(elt => {  
             Object.values(elt).forEach(elt =>{ 
                if(elt.current !== null){
                    if(elt.current.value === ""){
                        isEmpty = true
                    }
                }else{
                    isEmpty = true
                } 
            })
        })

        isEmpty === false ? setDisabled(false) : setDisabled(true)
    }, [vocabDatas])

    return (
        <React.Fragment>
        {
            showTest === true ?
            <Test/>
            :
            <div className="container card border-dark modal-list">
                {vocabForm}
                <br/><br/>           
                <button 
                    className="btn btn-primary mb-4"
                    onClick={() => {
                        dispatch({type: "VOCAB", payload: vocabDatas});
                        setShowTest(true)
                    }} 
                    disabled={disabled}
                >Save</button>
                <input className="mb-4" type="button" onClick={() => window.location.reload()} id={motherLanguage}
                 value="Reset"/>
            </div>
        }
        </React.Fragment>
    )
}
