import { nanoid } from 'nanoid'
import {
  Box,
  ListSubheader,
  List,
  ListItemButton,
  ListItemText } from '@mui/material';

export function ListChats () {

  const chats = [
    {
        id: nanoid(),
        name: 'Chat1'
        
    },
    {
        id: nanoid(),
        name: 'Chat2'
        
    },
    {
        id: nanoid(),
        name: 'Chat3'
        
    },
    {
        id: nanoid(),
        name: 'Chat4'
        
    }
]
  return (
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
                    <ListItemButton key={item.id}>
                        <ListItemText
                            primary={item.name}
                            sx={{
                                color: 'white',
                            }}
                        />
                    </ListItemButton>
                )
            })
        }
    </List>
</Box>
)


}