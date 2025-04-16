import { useReducer, useState } from 'react'
import ReactDOM from 'react-dom/client'

function UseState() {
  
  const [count,setCount]=useState(0);
  function handlePlus(){
    setCount(count+1)
  }
  function handleMinus(){
    setCount(count-1)
  }

  return (
    <>
      <span>{count}</span><br />
      <button style={{backgroundColor:'green'}} onClick={handlePlus}>Cong</button>
      <button style={{backgroundColor:'red'}} onClick={handleMinus}>Tru</button>
    </>
  )
}

export default UseState
