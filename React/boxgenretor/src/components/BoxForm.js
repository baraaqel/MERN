import React, {useState} from 'react'

const BoxForm = (props) => {
    var colors = [];
    var heights = [];
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        colors.push(color);
        heights.push(height);
        props.onNewColors(colors);
        props.onNewHeights(heights);
        setColor("");
        setHeight("");
    }

    const onChange = (e) => {
        setColor(e.target.value);
    }

    const onChangeColor = (e) => {
        setHeight(e.target.value);
    }

    return (

        
        <form onSubmit={createBox}>
            <label htmlFor="color">Color: </label>
            <input
            type="text"
            name="color"
            onChange = {onChange}
            value = {color}
            />
            <br></br>
            <label htmlFor="height">Height: </label>
            <input
            type="text"
            name="height"
            onChange= {onChangeColor}
            value = {height}
            />
            <br></br>
            <input type="submit" value="Add Box!"/>
        </form>
    )
}

export default BoxForm