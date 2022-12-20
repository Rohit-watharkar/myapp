import { useState } from 'react'

function App() {
  // declare list store message and time. new Date is the create object for  timening giving
  let [list, setList] = useState([
    { message: 'hii Rohit', messageTime: new Date() },
    { message: 'How Are You', messageTime: new Date() },
    { message: 'I am Fine', messageTime: new Date() },
    { message: 'And You', messageTime: new Date() },
  ])

  // member function
  let addMessage = () => {
    let newMessage = { message: 'hii everyone...!', messageTime: new Date() }
    list = [newMessage, ...list]
    setList(list)
  }

  return (
    <div>
      <h1 className="bg-primary text-white p-3">Messaging Done</h1>

      <input
        className="btn-btn-primary"
        type="button"
        value="Add Message"
        onClick={addMessage}
      />

      {list.map((item, index) => (
        <div key={index} className="d-flex my-1">
          <div className="badge text-bg-primary">
            {item.message}
            <span className="ms-4">
              {item.messageTime.getHours()}:{item.messageTime.getMinutes()}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
export default App
