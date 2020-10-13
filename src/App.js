import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Interface from "./components/Interface/Interface";
import {useSelector} from "react-redux"
import ModalList from "./components/Interface/ModalList";

function App() {

  const [showForm, setShowForm] = useState(true)
  const [username, setUsername] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [disabled, setDisabled] = useState(true)
  
  // useEffect(() => {
  //   fetch('/api')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [])

  useEffect(() => {
    if(username !== "" && password1 !== "" && password2 !== ""){
      setDisabled(false)
    }
  }, [username, password1, password2])
  
  const {showModalList} = useSelector(state=>({...state.interfaceReducer}))

  return (

      showForm ?
        <form action="/subscription" method="post">
          <label htmlFor="username">username</label>
          <input name="username" type="text" onChange={(e) => setUsername(e.target.value)} value={username}/>
          
          <label htmlFor="password1">password</label>
          <input name="password" type="password" onChange={(e) => setPassword1(e.target.value)} value={password1}/>
          
          <label htmlFor="password2">password</label>
          <input name="password" type="password" onChange={(e) => setPassword2(e.target.value)} value={password2}/>
          
          <input type="submit" value="Submit" onClick={
            (e) => {
              password1 !== password2 ? e.preventDefault() : setShowForm(false)
            }
          } disabled={disabled}/>
        </form>
      :
        showModalList === true ? <ModalList/> :  <Interface/>
  );
}

export default App;
