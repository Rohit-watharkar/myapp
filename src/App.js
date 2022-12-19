function App() {
  // stateless variable
  let counter = 100

  // increamenet value after clicking button
  let increment = () => {
    counter = counter + 1
    console.log(counter)
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
