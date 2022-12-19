function App() {
  // Data Member
  let project = 'Counter Application'
  let btnvalu = 'click Mee'

  // Member Function
  let clickMe = () => alert()
  let increment = () => {}
  let decrement = () => {}

  // jsx
  return (
    <div>
      <h1>{project}</h1>
      <input type="button" value={btnvalu} onClick={clickMe} />
      <input type="button" value="Increment" onClick={increment} />
    </div>
  )
}

export default App
