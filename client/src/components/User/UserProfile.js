import React, {useEffect} from 'react';
import UserNav from "./UserNav";
import {get} from "../../store/actions/AuthAction";
import {connect} from "react-redux"
import {saveFav, removeFav} from "../../store/actions/FavsAction";
import RemoveFavList from "./RemoveFavList";
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const UserProfile = props => {

    useEffect(() => {
        props.get()
    }, [])

    const updatePass = e => {

        e.preventDefault();

        axiosWithAuth()
            .put(``, props.profile.password)
            .catch(err => console.log(err.response))
    }

    const delProfile = () =>{
        axiosWithAuth()
            .delete(``)
            .catch(err => console.log(err.response))
    }

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
                <button onClick={delProfile}>Delete Profile</button>
                <button 
                //onClick={}
                >Update Password</button>
            </div>
            <div>
                <h1>Salty Hackers</h1>
                <div>
                    {props.hackers.map(hacker => 
                    <p key={hacker.id}><span>❤️</span><button onClick={save}></button>{hacker}</p>)}
                </div>
            </div>
            <div>
                
                <div>
                    <RemoveFavList remove={remove} favorites={props.favorites} />
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
    console.log("state", state)
    return{
        hackers: state.hackers,
        favorites: state.favorites,
        profile: state.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);