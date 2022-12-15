import { useRef, useState, useEffect } from 'react'
import style from './form.module.css';
import { TextField } from '@mui/material';
import  Button  from '@mui/material/Button';


export function Form ( {addMessage} ) {
  
  const [text, setText] = useState('')
  
  const handelSubmit = (e) => {
    e.preventDefault()
    addMessage({
      author: 'User',
      text
    })
    setText('')
    
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.querySelector('input').focus()
}, [text])



return(
  <>
  <h1>Chat Form</h1>
      <form className={style.chat_form} onSubmit={handelSubmit}>
      <TextField id="outlined-basic"
        label="Введите сообщенеи"
        variant="outlined"
        type="text"
        value={text}
        autoFocus
        noValidate
        autoComplete='off'
        color="success"
        ref={inputRef}
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