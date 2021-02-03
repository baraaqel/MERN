import React from 'react';

const Todo =(props) => {
    const {list,setList} = props;

    let task = {
        name: "",
        isComplete: false
    }
    const onChange = e => {
        task.name = e.target.value;
    }
    const onClick = e => {
        setList([...list,task]);
    }

    return (
        <div>
            <h1>ToDo List Assi</h1>
            <input
                type="text"
                name="task"
                onChange={onChange} />
            <input type="button" value="add" onClick={onClick} />
        </div>
    )
}

export default Todo;