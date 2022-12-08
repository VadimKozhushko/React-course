import style from './message.module.css';
console.log(style);


export function Message({messageList}) {
  return (
    <div className="Message">
      <div className={style.message_box}>
      <ul className={style.chat_ul} >
        {messageList.map((item, index) => (
          <li key={index}>{item.author} : {item.text}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}


