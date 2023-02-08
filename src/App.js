// import file for external styling
import './App.css'

function App() {
  //first we declare and then use
  let mystyle = { color: 'white', background: 'purple' }

  return (
    <div>
      <h1 className="beautify">Hello Rutu!!!</h1>

      {/* THIS IS KIND OF INTERNAL.NOTE: only one curly braces. */}
      <h1 style={mystyle}>Hello Rohit</h1>

      {/* THIS IS INLINE STYLING */}
      <h1 style={{ color: 'white', backgroundColor: 'gray' }}>
        Hello Ronit!!!
      </h1>
    </div>
  )
}

export default App
