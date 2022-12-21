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
      <h1>{title}</h1>

      <input
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
        type="button"
        value="Make/API Post call"
        onClick={creeateNewMessage}
      />
      {messageList.map((item, index) => (
        <div key={index}>{item.message}</div>
      ))}
    </div>
  )
}

export default App
