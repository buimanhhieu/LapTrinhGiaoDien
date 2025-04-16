import { useReducer, useState } from 'react'


function Reducer() {
  function reducer(state,action){
    switch (action.type){
      case '+':
        return {...state,count: state.count+1};
        case '-':
          return {...state,count: state.count-1};
    }
  }
  const [state,dispatch] = useReducer(reducer,{count:0});


  return (
    <>
      <span>{state.count}</span><br />
      <button style={{backgroundColor:'green'}} onClick={() => dispatch({ type: '+' })}>Cong</button>
      <button style={{backgroundColor:'red'}} onClick={() => dispatch({ type: '-' })}>Tru</button>
    </>
  )
}

export default Reducer
