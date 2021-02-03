import React, { useState } from 'react';
import Todo from './Input';
import Lists from './Task';

const TodoList = () => {
    const [list, setList] = useState([]);

    return (
        <>
            <Todo list = {list} setList = {setList} />
            <div>
                {list.map((task,index) => (
                <Lists task = {task} index = {index} setList = {setList} list = {list} />
                ))}
            </div>
        </>
    )
}

export default TodoList;