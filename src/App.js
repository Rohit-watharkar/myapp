import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  let [title] = useState('API Demo')
  let [messageList, setMessageList] = useState([])

  //spl function :: Hook :: Like Constructor :: Called while the Componenet is Initilized
  useEffect(() => {
    // console.log("i am getting called");
    getAllMessages()
  }, [])

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

    let data = {
      message: 'CDAC Message',
      messageTime: new Date(),
      reply: true,
    }
    await axios.post(url, data)

    // to Refresh the content
    getAllMessages()
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
