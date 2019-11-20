import React from 'react';

const RemoveFav = props => {

    return(
        <li>
            <button 
            onClick={() => props.remove(props.hacker)}
            >💔</button>
            {props.hacker.name}
            {props.hacker.saltyness}
        </li>
    )
}

export default RemoveFav;