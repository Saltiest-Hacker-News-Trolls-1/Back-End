import React, { useEffect } from 'react';
import UserNav from "./UserNav";
import { get } from "../../store/actions/AuthAction";
import { connect } from "react-redux"
import { saveFav, removeFav } from "../../store/actions/FavsAction";
import RemoveFavList from "./RemoveFavList";

const UserProfile = props => {

    useEffect(() => {
        props.get()
    }, [props])

    const save = item => {
        props.saveFav(item);
    }

    const remove = item => {
        props.removeFav(item);
    }

    return (
        <div>
            <UserNav />
            <div>
                <h1>Salty Hackers</h1>
                <div>
                    {props.hackers.map(hacker =>
                        <span key={hacker.id} aria-label="heart" role="img">❤️<button onClick={save}></button>{hacker}</span>)}
                </div>
            </div>
            <div>

                <div>
                    <RemoveFavList remove={remove} favorites={props.favorite} />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    saveFav,
    get,
    removeFav
}

const mapStateToProps = state => {
    console.log("state", state.hackers)
    return {
        hackers: state.hackers,
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);