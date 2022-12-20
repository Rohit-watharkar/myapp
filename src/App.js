import { useState } from 'react'

function App() {
  let title = 'Map Demo'
  let [list, setlist] = useState([])

  //...list this is cloning use for take record as it is in the list
  let addItem = () => {
    // after clicking button all reacord access using id
    // reacord store in the textRef
    // alternate :: NP DOM PLZ!
    let textRef = document.querySelector('#textId1')

    //  cloning list then all record store in newList
    // logical part
    let newList = [textRef.value, ...list]

    // all record set in list
    // dom part
    setlist(newList)
  }

  return (
    // first write in text area and after clicking button
    <div>
      <h1>{title}</h1>
      <input type="text" name="" id="textId1" />
      <input type="button" value="Add Item into List" onClick={addItem} />

      {/* all stored record print one bye one acces using map(item)
       print on the browser */}
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  )
}

export default App

// [Sangli, Kolhapur,satara] => [<h1>Sangli</h1>, <h1>Kolhapur</h1>,<h1>Satara</h1>]
