import { useParams, Navigate } from 'react-router-dom'
import { Form } from '../components/Form/Form'
import { MessageList } from '../components/MessageList/MessageList'
import { ChatList } from '../components/ChatList/ChatList'
import { useSelector } from 'react-redux'
import { selectMessage } from '../store/messages/selectors'




export function ChatsPage ({chats}) {
  const {chatId} = useParams()

  const messagesChat = chats.find((chat) => chat?.name === chatId)
  const messages = Object.entries(messagesChat.messages).map((mes) => ({
    id: mes[0],
    text: mes[1].text,
    author: mes[1].author,
  }))
  console.log('messages', messagesChat)

  return (
    <>
      <h1>Welcome to chat!</h1>
      <ChatList chats={chats} />
      <MessageList 
        messages={chatId ? messages : []}
      />
      <Form />
    </>
  )
}