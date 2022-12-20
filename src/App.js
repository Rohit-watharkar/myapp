import { useState } from 'react'

function App() {
  let title = 'Map Demo'
  let [list, setlist] = useState([])

  //...list this is cloning use for take record as it is in the list
  let addItem = () => {
    // logical part
    let newList = [...list, 'Sangli islampur']

    // dom part
    setlist(newList)
  }

  return (
    <div>
      <h1>{title}</h1>
      <input type="button" value="Add Item into List" onClick={addItem} />

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  )
}

export default App

// [Sangli, Kolhapur,satara] => [<h1>Sangli</h1>, <h1>Kolhapur</h1>,<h1>Satara</h1>]
