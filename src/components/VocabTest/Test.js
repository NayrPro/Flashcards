import React, {useEffect} from "react";
import Menu from './Menu'
import Quizz from './Quizz'
import {useSelector, useDispatch} from "react-redux";

function Test() {

  const {vocab, languageSelect, languageInput, menu} = useSelector(state => ({...state.wordReducer}))
  const dispatch = useDispatch()

  function nextWord(){
    const newVocab = [...vocab]
    const { length } = newVocab;
    const rand = Math.floor(Math.random() * length);    
    dispatch({type: "WORD", payload: newVocab[rand][languageSelect]})
    dispatch({type: "MATCH", payload: newVocab[rand][languageInput]})
    
    newVocab.splice(rand, 1);
    dispatch({type: "VOCAB", payload: newVocab})
  }

  useEffect(() => { 
    menu === "off" && nextWord()
    // eslint-disable-next-line
  }, [menu])

  return (
    <div>{menu === "on" ? <Menu/> : <Quizz nextWord={nextWord}/>}</div>
  );
}

export default Test;
