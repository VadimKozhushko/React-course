import { useState } from 'react'
import style from './form.module.css';


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

  
return(
  <>
  <h1>Chat Form</h1>
      <form className={style.chat_form} onSubmit={handelSubmit}>
        <input className={style.chat_input}
          placeholder="введите сообщение"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        
        <button className={style.chat_button} type="submit">Add message</button>
          
        
      </form>


  </>
)





}