
import { useState, useEffect } from 'react';
import '../App.css';
import { Message } from '../components/Message/Message';
import { Form } from '../components/Form/Form';
import { ChatList } from '../components/ChatList/ChatList';
import { Box } from '@mui/material';
import { useParams, Navigate} from 'react-router-dom'
import chats from '../components/ChatList/chats';

export function ChatsPage() {
  
 
  // const [chatIsExist, setChatIsExist] = useState();
  const {chatId} = useParams()
  
  // useEffect(() => {setChatIsExist(chats.find(({id})=>chatId===id))
  // console.log(chats, chatId);
  // },[chatId])
 

  const [messageList, setList] = useState([])

  const addMessage = (newMessage) => {
    setList([...messageList, newMessage])
  }
  
  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === 'User') {
      const timeout = setTimeout(() => {
        addMessage({
          author: 'BOT',
          text: 'Hallow!'
        })
      }, 1000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messageList])
  
  if(!chats.find(({id})=>chatId===id)) {
    return <Navigate to="/chats" replace />
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
      My React Homework #3
    
      <Form addMessage={addMessage}/>
      <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around'
      }}
    >
      <ChatList/>
      <Message messageList={messageList}/>
      </Box>
      </header>
      
    </div>
  );
}


