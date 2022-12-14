import { useRef, useState, useEffect } from 'react'
import style from './form.module.css';
import { TextField } from '@mui/material';
import  Button  from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { addMessage, addMessageWithBot } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'
import { AUTHOR } from '../../constants'

import { push } from "firebase/database";
import { getMessageListById } from '../../services/firebase'

export function Form() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const { chatId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    dispatch(addMessageWithBot(chatId, {
      author: AUTHOR.user,
      text
    }))
    push(getMessageListById(chatId), {
      author: AUTHOR.user,
      text
    })
    setText('')
  }


return(
  <>
  <h1>Chat Form</h1>
      <form className={style.chat_form} onSubmit={handleSubmit}>
      <TextField id="outlined-basic"
      inputRef={input => input && input.focus()}
        label="Введите сообщенеи"
        variant="outlined"
        type="text"
        value={text}
        noValidate
        autoComplete='off'
        color="success"
        onChange={(event) => setText(event.target.value)}
        sx={{
          marginRight: '10px'
        }}
        />
        
      <Button variant="contained"
        sx={{
          height: '54px'
        }}
         color="success"
         type="submit"
         size="large"
         
         >ADD message</Button>
        
       
          
        
      </form>


  </>
)





}