import { useState } from 'react'

function App() {
  // statefull variable
  // let counter = 100

  let [counter, setcounter] = useState(10)

  let increment = () => {
    counter = counter + 1

    // RE-RENDER
    setcounter(counter)
  }

  //  create html buttons using tag and call increment function
  return (
    <div>
      <h1>Counter Application</h1>
      <h1>{counter}</h1>
      <input type="button" value="Incremenet" onClick={increment} />
    </div>
  )
}

export default App
