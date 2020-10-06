import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Interface from "./components/Interface/Interface";
import {useSelector} from "react-redux"
import ModalList from "./components/Interface/ModalList";

function App() {
    
  
  const {showModalList} = useSelector(state=>({...state.interfaceReducer}))

  return (
      showModalList === true ? <ModalList/> :  <Interface/>
  );
}

export default App;
