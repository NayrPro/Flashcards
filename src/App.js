import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Test from "./components/Test"
import Interface from "./components/Interface/Interface";
import {useSelector} from "react-redux"
import ModalList from "./components/Interface/ModalList";

function App() {
  const {showModalList} = useSelector(state=>({...state.interfaceReducer}))
  const {vocab} = useSelector(state=>({...state.wordReducer}))

  

 useEffect(() => {
 }, [showModalList])

  useEffect(() => {
    console.log(vocab);
  }, [vocab])

  return (
      /* <Test/> */
      /* <Home/> */
      showModalList === true ? <ModalList/> :  <Interface/>
  );
}

export default App;
