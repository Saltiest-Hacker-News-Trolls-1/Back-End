import React from 'react';
import RemoveFav from "./RemoveFav";

const RemoveFavList = props => {

    console.log("Remove", props)

    return(
        <div>
            <h1>Favorite Salty Hackers</h1>
            {props.hackers.length ? (
                <ol>
                {props.hackers.map(hacker => {
                <RemoveFav 
                key={hacker.id}
                remove={props.remove}
                />
                })}
                </ol> 
            ) : (<p>Your favorites here</p>)}
        </div>
    )
}

export default RemoveFavList;