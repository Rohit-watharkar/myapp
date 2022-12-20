function App() {
  // creat object and item store in the map of array
  let title = 'Map Demo'
  let list = ['Sangli', 'Kolhapur', 'Satara']

  // access the item in the array and print on the browser
  return (
    <div>
      <h1> {title} </h1>

      {/* map is use for store and item is string store in the array */}
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  )
}

export default App

// [Sangli, Kolhapur,satara] => [<h1>Sangli</h1>, <h1>Kolhapur</h1>,<h1>Satara</h1>]
