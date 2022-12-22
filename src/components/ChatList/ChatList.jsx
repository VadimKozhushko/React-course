
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



export function ChatList() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const chats = useSelector(selectChat,
   (prev, next) => prev.length === next.length)

  console.log('update chats', chats)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addChat(value))
    
  }
    
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
                                key={chats.id}
                            
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
                                <button onClick={() => dispatch(deleteChat(chat.name))}>X</button>
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
