import { useParams, Navigate } from 'react-router-dom'
import { Form } from '../components/Form/Form'
import { MessageList } from '../components/MessageList/MessageList'
import { ChatList } from '../components/ChatList/ChatList'
import { useSelector } from 'react-redux'
import { selectMessage } from '../store/messages/selectors'




export function ChatsPage () {

  const {chatId} = useParams()
  const messages = useSelector(selectMessage)

  if(chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <h1>Welcome to chat!</h1>
      <ChatList />
      <MessageList
        messages={chatId ? messages[chatId] : []}
      />
      <Form />
    </>
  )
}