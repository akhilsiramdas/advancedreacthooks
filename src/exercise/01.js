// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// function countReducer(state, action) {
//   return {
//     ...state,
//     ...(typeof action === 'function' ? action(state) : action)
//   }
// }

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state,count: state.count + action.step}
    }
    case 'DECREMENT': {
      return {...state,countDiff: state.countDiff - action.stepdiff}
    }
    default:
      throw new Error(`Unspported action type: ${action.type}`)
  }
}

function Counter({initialCount = 0, initialCountdiff = 0, step = 1, stepdiff = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
    countDiff : initialCountdiff
  })
  const {count, countDiff} = state
  console.log('state ',state);
  const increment = () => dispatch({type: 'INCREMENT', step})
  const decrement = () => dispatch({type: 'DECREMENT', stepdiff})
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  // const increment = () => setState(currentState => ({count: currentState.count + step}))
  return (
    <>
      <button onClick={increment}>{count}</button>
      <button onClick={decrement}>{countDiff}</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
