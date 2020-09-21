import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function ModalList() {
    
    const {wordsNumber, vocabDatas, motherLanguage, foreignLanguage} = useSelector(state => ({...state.interfaceReducer}))

    const dispatch = useDispatch()
    
    const [firstLang, setFirstLang] = useState("")
    const [secondLang, setSecondLang] = useState("")

    useEffect(() => {
        const array = vocabDatas
        for (let index = 0; index < wordsNumber; index++) {
            array.push({id: index, [motherLanguage]: "", [foreignLanguage]: ""})
        }    
        dispatch({type: "DATA", payload: array})
        console.log(vocabDatas)
    }, [])

    const vocabForm = () => (
            <React.Fragment>
                <label htmlFor={motherLanguage}>{motherLanguage}</label>
                <input type="text" name={motherLanguage} onChange={(e) => setFirstLang(e.target.value)} value={firstLang}/>

                <label htmlFor={foreignLanguage}>{foreignLanguage}</label>
                <input type="text" name={foreignLanguage} onChange={(e) => setSecondLang(e.target.value)} value={secondLang}/>
            </React.Fragment>
    )


    return (
        <div>
          {/** Afinir **/  }
        </div>
    )
}
