import { useState } from 'react'

function AppBody() {
  let [list] = useState([{}, {}, {}, {}, {}, {}, {}, {}])

  return (
    <div className="row">
      {list.map((item, index) => (
        <div key={index} className="col-12 col-md-3 my-2">
          <div className="card">
            <img
              src={`https://picsum.photos/${250 + index}`}
              alt=""
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-header">Card Title</div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              maxime quam atque vero molestias! Nulla, earum voluptatem culpa id
              quis deserunt eveniet modi. Inventore excepturi eaque ex mollitia
              deserunt exercitationem!
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AppBody
