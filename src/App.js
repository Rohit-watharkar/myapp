// import function for initilization uses
import { useState } from 'react'

function App() {
  // datamember
  let [theme, setTheme] = useState('primary')

  // member function
  let makeprimaryTheme = () => {
    // after cliking button this theme given bootstarp styling
    theme = 'primary'
    // them overrride on them using setthem
    setTheme(theme)
  }
  let makesuccessTheme = () => {
    // after cliking button this theme given bootstarp styling
    theme = 'success'
    // them overrride on them using setthem
    setTheme(theme)
  }
  let makedangerTheme = () => {
    // after cliking button this theme given bootstarp styling
    theme = 'danger'
    // them overrride on them using setthem
    setTheme(theme)
  }

  return (
    <div>
      {/* all theme assign to background  */}
      <h1 className={`bg-${theme} text-light p-3`}>Bootstrap styling!!..</h1>

      <input
        //then given on the button
        className="btn btn-primary"
        type="button"
        value="primary theme"
        // call the function after clicking button
        onClick={makeprimaryTheme}
      />
      <input
        //then given on the button
        className="btn btn-success"
        type="button"
        value="success theme"
        // call the function after clicking button
        onClick={makesuccessTheme}
      />
      <input
        //then given on the button
        className="btn btn-danger"
        type="button"
        value="danger theme"
        // call the function after clicking button
        onClick={makedangerTheme}
      />
    </div>
  )
}

export default App
