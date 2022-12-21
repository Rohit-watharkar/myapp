import { useState } from 'react'
function App() {
  return (
    <div>
      <AppHeader />
      <AppBody />
    </div>
  )
}

function AppHeader() {
  return (
    <div className="bg-dark text-light p-3">
      <div className="fs-3">Shopping Book</div>
    </div>
  )
}

function AppBody() {
  let [list] = useState([{}, {}, {}, {}, {}, {}, {}, {}])

  return (
    <div className="card-body">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
      deleniti, ea itaque eos praesentium aperiam cumque illum, aut ipsa
      assumenda minus quae a! Expedita iste ad ullam, aperiam impedit obcaecati!
    </div>
  )
}

export default App
