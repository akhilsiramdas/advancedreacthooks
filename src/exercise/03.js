// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext

const CountContext = React.createContext()
// 🐨 create a CountProvider component here that does this:

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];
  return <CountContext.Provider value={value} {...props} />
}
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider


function useCount() {
  const context = React.useContext(CountContext);
  if(!context) {
    throw new Error(`useCount must be rendered within the CountProvider`)
  }

  return context;
}

function CountDisplay() {
  const [count] = useCount();
  // const count = 0
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {

  // 🐨 get the setCount from useContext with the CountContext
  const [, setCount] = useCount();
  // const setCount = () => {}
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
      </CountProvider>
      <Counter />

    </div>
  )
}

export default App
