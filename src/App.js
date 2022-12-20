import { useState } from 'react'

function App() {
  // declare list store message and time. new Date is the create object for  timening giving
  let [message, setMessage] = useState('Hello Rohit')
  let [list, setList] = useState([
    { message: 'hii Rohit', messageTime: new Date() },
    { message: 'How Are You', messageTime: new Date() },
    { message: 'I am Fine', messageTime: new Date() },
    { message: 'And You', messageTime: new Date() },
  ])

  // member function
  let updateInputMessage = (e) => {
    message = e.target.value
    setMessage(message)
  }

  let addMessage = () => {
    // let newMessage = { message: 'hii everyone...!', messageTime: new Date() }
    // dynamically msg givan at runtime
    let newMessage = { message: message, messageTime: new Date() }
    // ..list is cloning for give privious msg and also newMessage given
    list = [newMessage, ...list]

    // this msg store in the list variable and this assign to setlist
    setList(list)
  }

  return (
    <div>
      {/* this is only heading of messaging app */}
      <h1 className="bg-primary text-white p-3">Messaging App</h1>

      <div className="d-flex">
        <input
          className="form-control"
          value={message}
          onChange={updateInputMessage}
          type="text"
          placeholder="Enter Message"
        />

        <input
          className="btn-btn-primary"
          type="button"
          value="Add Message"
          onClick={addMessage}
        />
      </div>

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
