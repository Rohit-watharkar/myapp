import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

function App() {
  let inputRef = useRef()
  let [title] = useState('API Demo')
  let [message, setMessage] = useState('')
  let [messageList, setMessageList] = useState([])

  //spl function :: Hook :: Like Constructor :: Called while the Componenet is Initilized
  useEffect(() => {
    // console.log("i am getting called");
    getAllMessages()
  }, [])

  let handleOnChangeMessage = (e) => {
    message = e.target.value
    setMessage(message)
    // setMessage(e.target.value) // we can also write this way
  }

  // member function
  let getAllMessages = async () => {
    let url = `http://localhost:3001/messages`
    let response = await axios.get(url)

    //  getting the message from server :: And re-rendaring
    messageList = [...response.data]
    setMessageList(messageList)
  }

  let creeateNewMessage = async () => {
    let url = `http://localhost:3001/message`
    // console.log(inputRef.current);
    if (!inputRef.current.checkvalidity()) {
      alert('Invalid')
      return
    }

    let data = {
      message: message,
      messageTime: new Date(),
      reply: true,
    }
    await axios.post(url, data)

    setMessage('')

    // to Refresh the content
    getAllMessages()
  }

  let checkEnterCode = (e) => {
    if (e.keyCode == 13) {
      creeateNewMessage()
    }
  }

  return (
    <div>
      <h1 className="bg-dark text-light p-3 sticky-top">{title}</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="d-flex">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Hi...whatsapp...!!"
              value={message}
              onChange={handleOnChangeMessage}
              onKeyUp={checkEnterCode}
              ref={inputRef} //document.queryselector
              // for entering char min 2 required
              // if not given then give invalid msg
              required
              minLength={2}
            />
            <input
              className="btn btn-secondary"
              type="button"
              value="Add"
              onClick={() => creeateNewMessage(false)}
            />
            <input
              className="btn btn-secondary"
              type="button"
              value="Reply"
              onClick={() => creeateNewMessage(true)}
            />
          </div>
        </div>
      </div>
      {messageList.map((item, index) => (
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div
              key={index}
              className={
                item.reply
                  ? 'd-flex justify-content-end my-1'
                  : 'd-flex justify-content-start my-1'
              }
            >
              <div className="badge text-bg-secondary">
                {item.message}{' '}
                <span>
                  {new Date(item.messageTime).getHours()}:
                  {new Date(item.messageTime).getMinutes()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
