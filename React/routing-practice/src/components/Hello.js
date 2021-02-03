import React from 'react';




const Hello = props => {
    return (

        <div>
            <h1 style={{color: "blue", background:"red"}}>The Word is: {props.id}</h1>
        
        </div>
    )
}

export default Hello