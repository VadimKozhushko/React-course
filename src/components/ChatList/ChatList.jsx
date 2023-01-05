
import { NavLink } from 'react-router-dom';
import {
  Box,
  ListSubheader,
  List,
  ListItemButton,
  Typography } from '@mui/material';
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat } from '../../store/messages/actions'
import { selectChat } from '../../store/messages/selectors'
import { push, set, remove } from "firebase/database";
import { messagesRef, getChatById, getMessageListById } from '../../services/firebase';



export function ChatList({messagesDB, chats}) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
  
    console.log('update chats', chats)
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addChat(value))
  
      set(messagesRef, {
        ...messagesDB,
        [value]: {
          name: value
        }
      })
  
      push(getMessageListById(value), {
        text: 'Chat has been created',
        author: 'Admin',
      });
  
      setValue('');
    }
  
    console.log('chats', chats)
    const handleDeleteChat = (chatId) => {
      remove(getChatById(chatId));
    };
  
    
  return (
    <>
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '250px',
        bgcolor: 'green',
        borderRadius: '20px',
    }}
>
    <List
        sx={{
            width: '100%',
            borderRadius: '20px',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                    bgcolor: 'green',
                    color: 'white',
                    borderRadius: '20px',
                }}
            >
                Chats
            </ListSubheader>
        }
    >
        {
            chats.map(chat => {
                return (
                  <ListItemButton
                                component={NavLink}
                                to={`/chats/${chat.name}`}
                                key={chat.id}
                            
                                sx={{
                                    borderBottom: '3px solid transparent',
                                    '&.active': {
                                        backgroundColor: '#0d4b1a',
                                        borderBottom: '3px solid white'
                                    }
                                }}
                            >
                                
                                <Typography
                                    sx={{
                                        color: 'primary.contrastText',
                                    }}
                                >
                                    {chat.name}
                                </Typography>
                                <button onClick={() => dispatch(handleDeleteChat(chat.name))}>X</button>
                            </ListItemButton>
                )
            })
        }
    </List>
</Box>
<h1>ChatList</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Create Chat</button>
      </form>

</>
)


}
