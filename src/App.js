import { useState } from 'react'
function App() {
  return (
    <div>
      {/* function call from main function */}
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  )
}

function AppHeader() {
  return (
    // bootstarp property uses for style
    <div className="bg-dark text-light p-3 sticky-top">
      <div className="fs-3">Shopping Book</div>
    </div>
  )
}

function AppBody() {
  // how many time paregraph we want thats whay {} given
  let [list] = useState([{}, {}, {}, {}, {}, {}, {}, {}])

  return (
    <div className="row">
      {list.map((item, index) => (
        // for colomn styling
        <div key={index} className="col-12 col-md-3 my-2">
          <div className="card">
            <img
              src={`https://picsum.photos/${250 + index}`}
              alt=""
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-header">Card Title</div>
            <div className="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Eligendi, deleniti, ea itaque eos praesentium aperiam cumque
              illum, aut ipsa assumenda minus quae a! Expedita iste ad ullam,
              aperiam impedit obcaecati!
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function AppFooter() {
  return (
    <div
      className="bg-secondary d-flex flex-column justify-content-center align-items-center "
      style={{ height: '300px' }}
    >
      <div className="text-light fs-4"> Copy Right by Student Community!..</div>
      <div className="text-light fs-6">Follow us @ Twitter</div>
      <div className="text-light fs-6">Follow us @ YouTube</div>
    </div>
  )
}

export default App
