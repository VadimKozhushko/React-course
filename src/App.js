import { useState, useEffect } from 'react';
import './App.css';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';

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
      My React Homework #2
      <Form addMessage={addMessage}/>
      <Message messageList={messageList}/>
      </header>
      
    </div>
  );
}


