import React from 'react'

const Task = props => {
    const {task,index,setList,list } = props;

    const onClick =() => {
        setList(() => {
            return list.filter(task =>list.indexOf(task) !== index)
        })
    }
    const onChange =() => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return (
        <>
            {task.isComplete ?
                <h3>{task.name}</h3> :
                <h3>{task.name}</h3>}
            <input type="checkbox" onChange={onChange} checked={task.isComplete} />
            <input type="button" value="delete" onClick={onClick} />
        </>
    )
}

export default Task