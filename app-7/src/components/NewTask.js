import React from 'react'

function NewTask(props){
    return(
        <div>
            <input 
                onChange={e=>props.updateInput(e.target.value)}  
                value={props.userInput} />
            <button onClick={()=>props.addItem(props.userInput)}>Add Task</button>

        </div>
    );
}

export default NewTask
