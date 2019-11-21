import React from 'react';

const RemoveFav = props => {

    return (
        <li>
            <button
                onClick={() => props.remove(props.hacker)}
            ><span role="img" aria-label="heart">💔</span></button>
            {props.hacker.name}
            {props.hacker.saltyness}
        </li>
    )
}

export default RemoveFav;