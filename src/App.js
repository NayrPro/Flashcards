import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Test from "./components/Test"
import Interface from "./components/Interface/Interface";
import {useSelector} from "react-redux"
import ModalList from "./components/Interface/ModalList";

function App() {
  const {showModalList} = useSelector(state=>({...state.interfaceReducer}))
  return (
      /* <Test/> */
      <React.Fragment>
        {showModalList === true ? <ModalList/> : <Interface/>}
      </React.Fragment>
  );
}

export default App;
