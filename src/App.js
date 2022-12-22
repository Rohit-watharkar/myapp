import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  return (
    // ErrorBoundary is similar like try catch block
    // FallbackComponenet use for handle error
    <ErrorBoundary FallbackComponent={HandlerError}>
      <HelloWorld />
    </ErrorBoundary>
  )
}

// this function use for error handling purpoase
function HandlerError({ error }) {
  console.log('This error occoured', error)

  return (
    <div>
      <h1>An Error Occured..Somthing Wrong in the Code plz check</h1>
    </div>
  )
}

function HelloWorld() {
  let [user] = useState({ id: 1, name: 'Rutu!..' })

  return (
    <div>
      {/* this is Error Line bcz we use array thats whay property name rquired */}
      {/* <h1>Hello Rohit This is Your NikName!..</h1> <h1>{user}</h1> */}
      {/* this is correcy Syntax */}
      <h1>Hello Rohit This is Your NikName!..</h1> <h1>{user.name}</h1>
    </div>
  )
}
export default App
