import './Message.css';
import style from './qwerty.module.css';
console.log(style);
function Message(props) {
  return (
    <div className="Message">
      <div className="Message-box">
        <h3 className={style.test}>{props.someText}</h3>
      </div>
    </div>
  );
}

export default Message;
