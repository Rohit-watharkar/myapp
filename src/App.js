import axios from 'axios'
import { useState } from 'react'

function App() {
  let [title] = useState('API Demo')
  let [messageList, setMessageList] = useState([])

  // member function
  let getAllMessages = async () => {
    let url = `http://localhost:3001/messages`
    let response = await axios.get(url)

    messageList = [...response.data]
    setMessageList(messageList)
  }

  let creeateNewMessage = async () => {
    let url = `http://localhost:3001/message`

    let data = {
      message: 'Test Message',
      messageTime: new Date(),
      reply: true,
    }
    await axios.post(url, data)
  }

  return (
    <div>
      <h1>{title}</h1>

      <input type="button" value="Make/API call" onClick={getAllMessages} />
      <input type="button" value="Make/API call" onClick={creeateNewMessage} />
      {messageList.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  )
}

export default App
