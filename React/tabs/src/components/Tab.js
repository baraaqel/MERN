import Button from '@material-ui/core/Button';
import { keyframes } from "styled-components";
import React, {useState} from 'react';
import {bounce} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const Tab = (props) => {
    const[open, setOpen] = useState(0);
    const onClickHandler = (e, i, str) => {
        setOpen(i);
        console.log(i)
    }
    const styles = {
        bounce: {
          animation: 'x 5s',
          animationName: Radium.keyframes(bounce, 'bounce')
        }
      }
    return (
        <StyleRoot>
            {props.contents.map((content, i) =>
                <Button key = {i} variant="contained" color="primary" onClick={ (e) => onClickHandler(e, i, "this is an alert") } >Tab</Button>
            )}
            { open===1?
            <p style={styles.bounce}>{props.contents[0]}</p>
            :open ===2?
            <p style={styles.bounce}>{props.contents[1]}</p>
            :
            <p style={styles.bounce}>{props.contents[2]}</p>
        }
        </StyleRoot>
    )
}

export default Tab;