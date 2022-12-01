import './App.css';
import Message from './Message';


function App(props) {

  const text = 'My First React Text';

  return (
    <div className="App">
      <header className="App-header">
      My First React Homework
      <Message someText={text} />
      </header>
      
    </div>
  );
}

export default App;
