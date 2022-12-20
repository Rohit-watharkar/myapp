// import function for initilization uses
import { useState } from 'react'

function App() {
  // datamember
  let [theme, setTheme] = useState('primary')

  // member function
  // after clicking parameter pass from onclik and this parameter assign to p1 and p1 assign to the them
  // intially them first time assign
  let updateTheme = (p1 = 'primary') => {
    theme = p1
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
        // onClick={updateTheme}
        onClick={() => updateTheme('primary')}
      />
      <input
        //then given on the button
        className="btn btn-success"
        type="button"
        value="success theme"
        // call the function after clicking button
        onClick={() => updateTheme('success')}
      />
      <input
        //then given on the button
        className="btn btn-danger"
        type="button"
        value="danger theme"
        // call the function after clicking button
        onClick={() => updateTheme('danger')}
      />
    </div>
  )
}

export default App
