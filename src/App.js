function App() {
  // without parameter pass
  let clickMe1 = () => {
    console.log('Hello Rohit!..')
  }

  // pass Event as parameter
  let clickMe2 = (e) => {
    console.log('e')
  }

  // Custom Parameter
  let clickMe3 = (p1) => {
    console.log(p1)
  }

  // Event + Custom Parameter
  let clickMe4 = (e, p1) => {
    console.log(e, p1)
  }

  return (
    <div>
      <h1>btn Click Demo!..</h1>

      {/* Default no Parameter */}
      <input type="button" value="Click Me 1" onClick={clickMe1} />

      {/* Default Event Parameter */}
      <input type="button" value="Click Me 2" onClick={clickMe2} />

      {/* Custom Parameter */}
      <input
        type="button"
        value="Click Me 3"
        onClick={() => clickMe3('primary')}
      />
      {/* Custom Parameter */}
      <input
        type="button"
        value="Click Me 3"
        onClick={() => clickMe3('danger')}
      />
      {/* Event + Custom Parameter */}
      <input
        type="button"
        value="Click Me 4"
        onClick={(e) => clickMe4(e, 'Rutu!...')}
      />
    </div>
  )
}

export default App
