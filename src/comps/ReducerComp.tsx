import { useReducer } from "react";
import Navbar from "./Navbar"
import { reducer } from "./reducer";
import ReducerInput from "./ReducerInput";
import ReducerOutput from "./ReducerOutput";

export default function ReducerComp() {
  document.title="ReducerComp"
  const [formState, dispatchState] =useReducer(
    reducer, { name:"", email:"", age:Number, weight:Number }
  );
  const formKeys =Object.keys(formState)
  
  return (<>
  <Navbar/>
  <div>
    <h1>ReducerComp</h1>
    <ReducerInput 
      formState={formState} 
      formKeys={formKeys} 
      dispatchState={dispatchState}
    />    

    <ReducerOutput 
      formState={formState} 
      formKeys={formKeys} 
    />

    {/* <input type="range" value="3" />
    <meter value="5" min="0" max="10">2 out of 10</meter>
    <select name="cars" id="cars">
      <optgroup label="Swedish Cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </optgroup>
      <optgroup label="German Cars">
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </optgroup>
    </select> */}
  </div>
  </>)
}