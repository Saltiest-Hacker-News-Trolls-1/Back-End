<<<<<<< HEAD
import React from 'react';
import UserNav from "./UserNav"
import axios from "axios"

const UserProfile = () => {
// axios 
// .get(``)
// .then(response =>{
          
//     console.log(response);
//     setData(response.data.results);
//   })
//   .catch(error =>{
//     console.log(error);
//   });
=======
import React, {useEffect} from 'react';
import UserNav from "./UserNav";
import {get} from "../../store/actions/AuthAction";
import {connect} from "react-redux"
import {saveFav, removeFav} from "../../store/actions/FavsAction";
import RemoveFavList from "./RemoveFavList";

const UserProfile = props => {
>>>>>>> 37f66ee41040484bbb1f6fa8969cd4054ae4ed9a

    useEffect(() => {
        props.get()
    }, [])

    const save = item => {
        props.saveFav(item);
    }

    const remove = item => {
        props.removeFav(item);
    }

    return(
        <>
            <UserNav />
            <div>
                <h1>Salty Hackers</h1>
                <div>
                    {props.hackers.map(hacker => 
                    <p key={hacker.id}>❤️<button onClick={save}></button>{hacker}</p>)}
                </div>
            </div>
            <div>
                
                <div>
                    <RemoveFavList remove={remove} favorites={props.favorite} />
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    saveFav,
    get,
    removeFav
}

const mapStateToProps = state => {
    console.log("state", state.hackers)
    return{
        hackers: state.hackers,
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);