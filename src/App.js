import { useState } from 'react'

function App() {
  let [message, setmessage] = useState('Rohit')

  let updateMessage = (e) => {
    // target returns the DOM element that triggered a specific event,
    //  so we can retrieve any property/ attribute with a value
    message = e.target.value

    setmessage(message)
  }

  return (
    <div>
      <h1>Working with input</h1>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        // The onChange event in React detects when the value of an input element changes.
        onChange={updateMessage}
      />
      <h1>{message}</h1>
    </div>
  )
}
export default App
