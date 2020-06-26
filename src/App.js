import React, { useState } from 'react';
import './App.css';
import Message, { List } from './Message';


function App() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <Message counter={count} ></Message>
      <button onClick={() => setCount(count + 1)} >
        update
      </button>
      <List></List>
    </div>
  );
}


export default App;











