import { useState } from 'react'
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

export default AppBody
