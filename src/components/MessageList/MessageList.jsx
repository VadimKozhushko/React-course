import style from './message.module.css';


export function MessageList ({messages}) {
  
  return (
    <>
      <ul className={style.chat_ul}>
        {messages.map((message, index) => (
          <li key={index}>
            {message.author} : {message.text}
          </li>
        ))}
      </ul>
    
    </>
  )
}

