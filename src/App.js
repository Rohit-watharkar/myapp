import { useState } from 'react'

function App() {
  return (
    <div>
      <Counter1 />
      <hr />
      <Counter2 />
    </div>
  )
}

function Counter1() {
  let [amount, setAmount] = useState(100)

  let deposit = () => {
    amount += 50
    setAmount(amount)
  }

  return (
    <div>
      <h1>Counter 1 - Amount {amount}</h1>
      <input type="button" value="Deposit" onClick={deposit} />
    </div>
  )
}
function Counter2() {
  let [amount, setAmount] = useState(100)

  let deposit = () => {
    amount += 50
    setAmount(amount)
  }

  return (
    <div>
      <h1>Counter 1 - Amount {amount}</h1>
      <input type="button" value="Deposit" onClick={deposit} />
    </div>
  )
}
export default App
