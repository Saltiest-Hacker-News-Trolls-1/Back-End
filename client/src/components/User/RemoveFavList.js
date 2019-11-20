import React from 'react';
import RemoveFav from "./RemoveFav";


const RemoveFavList = props => {

    console.log("Remove", props)

    return(
        <div>
            <h1>Favorite Salty Hackers</h1>
            {/* {props.favorites.length ? ( */}
                <ol>
                    {props.favorites.map(fav => {
                    <RemoveFav 
                    key={fav.id}
                    remove={props.remove}
                    favorite={fav}
                    />
                    })}
                </ol> 
            {/* ) : (<p>Your favorites here</p>)} */}
        </div>
    )
}

export default RemoveFavList;