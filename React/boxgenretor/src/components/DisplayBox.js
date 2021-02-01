import Box from './Box';
import React from 'react';

const DisplayBox = (props) => {
    const colors = props.colors;
    const heights = props.heights;
    return (
        <div>
            {colors.map ((color, i) => 
            <Box key={i} newColor={color} newHeight={heights[i]}/>
            )}
        </div>
    )
}

export default DisplayBox