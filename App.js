import React, { useState } from 'react';
import './App.css';

import  Todo from './todo';

function App() {
  const [inputlist,setInputList] = useState("");

  const [ items , setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
    
  };

  const listofitems = () => {
    setItems((oldItems) => {
      return [ ...oldItems,inputlist]
    });

    setInputList('');
  };

  const delitem = (id) =>{
    // console.log("deleted");

    setItems((oldItems) => {

      return oldItems.filter((arrEle,index)=>{
        return index !== id;
      });

    });
  };
  return (
    <div className = "main_div">
      <div className = "center_div">
        <h1>TODO LIST</h1>
        <br />
        <input type ="text" placeholder="Add items"
        value={inputlist} onChange={itemEvent}/>
        <button onClick = {listofitems}>+</button>
        <br />

        <ol>
        
        {
          items.map((itemval ,index) => {
            return <Todo key= {index} id={index} text={itemval} onSelect={delitem} />

          })
        }

        </ol>
      </div>

    </div>
    
  );
}

export default App;
