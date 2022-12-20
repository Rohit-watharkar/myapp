import { useState } from 'react'

function App() {
  // declare list store message and time. new Date is the create object for  timening giving
  let [list] = useState([
    { message: 'hii Rohit', messageTime: new Date() },
    { message: 'How Are You', messageTime: new Date() },
    { message: 'I am Fine', messageTime: new Date() },
    { message: 'And You', messageTime: new Date() },
  ])

  return (
    <div>
      {/* give massage box heading */}
      <h1 className="bg-primary text-white p-2">Messaging Demo</h1>

      {/* taking one by one msg in the list */}
      {list.map((item, index) => (
        <div key={index} className="d-flex my-1">
          <div className="badge text-bg-primary">
            {/* print message */}
            {item.message}

            {/* give margine */}
            <span className="ms-5">
              {/* accessing object and print timing */}
              {item.messageTime.getHours()}:{item.messageTime.getMinutes()}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
export default App
