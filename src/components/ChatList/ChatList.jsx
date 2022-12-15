
import { NavLink } from 'react-router-dom';

import {
  Box,
  ListSubheader,
  List,
  ListItemButton,
  Typography } from '@mui/material';
import chats from './chats';

console.log(chats);



export function ChatList () {
    
    
  

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
            chats.map(item => {
                return (
                  <ListItemButton
                                component={NavLink}
                                to={`/chats/${item.id}`}
                                key={item.id}
                            
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
                                    {item.name}
                                </Typography>

                            </ListItemButton>
                )
            })
        }
    </List>
</Box>
</>
)


}