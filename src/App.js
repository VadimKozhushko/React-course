import { useState, useEffect } from 'react';
import './App.css';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';
import { ListChats } from './components/ListChats/ListChats';
import { Box } from '@mui/material';



export function App() {
  
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
      <ListChats/>
      <Message messageList={messageList}/>
      </Box>
      </header>
      
    </div>
  );
}


