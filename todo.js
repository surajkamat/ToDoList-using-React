import React from 'react';

const Todo = (props) => {
    
    


return(
    <div className='todo_style'>
    
    <li >{props.text}
    <button onClick={()=>{
        props.onSelect(props.id)
    }}>-</button></li>
    
    </div>
    ) ;

} 

export default Todo;