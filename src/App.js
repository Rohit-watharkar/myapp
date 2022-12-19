// this is inbuilt react function use for intilization
import { useState } from 'react'

function App() {
  let str1 = 'Home'
  let str2 = 'Explore'
  let str3 = 'Notification'
  let [counter, setcounter] = useState(1)

  // let city = "mumbai";
  let [city, setcity] = useState('mumbai')
  let changecity = () => {
    city = 'Hello' + city

    // RE-RENDERING THE CITY VALUE
    setcity(city)
  }

  let increment = () => {
    // lOGICAL PART
    counter++
    console.log(counter)

    // DOM Update part.
    setcounter(counter)
  }

  //  create html buttons using tag and call increment and city function
  return (
    <div>
      <h1>{city}</h1>
      <input type="button" value="change city" onClick={changecity} />
      <hr />
      <h1>{str1}</h1>
      <h1>{str2}</h1>
      <h1>{str3}</h1>
      <h1>{counter}</h1>
      <input type="button" value="Incremenet" onClick={increment} />
    </div>
  )
}

export default App
