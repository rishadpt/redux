import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {increment,decrement} from "./actions"

function App() {
  const counter = useSelector (state => state.counter)
  const islogged = useSelector (state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div >
 <h1>Counter {counter}</h1>
 <button onClick={()=> dispatch(increment())}>+</button>
 <button onClick={()=>dispatch(decrement())}>-</button>
 {islogged ? <h3>Valuable information that is never seen is </h3> : ''}
    </div>
  );
}

export default App;
