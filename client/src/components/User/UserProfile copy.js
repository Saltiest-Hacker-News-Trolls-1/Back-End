import React, { useEffect } from 'react';
import UserNav from "./UserNav";
import { get } from "../../store/actions/AuthAction";
import { connect } from "react-redux"
import { saveFav, removeFav } from "../../store/actions/FavsAction";
import RemoveFavList from "./RemoveFavList";
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Route } from "react-router-dom";
import ChangePassForm from "./ChangePassForm";


const  = props => {

    useEffect(() => {
        props.get();
    }, [])

    const updatePass = e => {

        e.preventDefault();

        axiosWithAuth()
            .put(`/user/changePass/${props.match.params.id}`, props.profile.password)
            .catch(err => console.log(err.response))
    }

    const delProfile = () =>{
        axiosWithAuth()
            .delete(`/user/deleteAccount/${props.match.params.id}`)
            .catch(err => console.log(err.response))
    }

    const salty = []

    const saltiest = () => {
        //salty.sort((a,b) => (b.saltyness - a.saltyness))
        const salt = document.querySelector("#hacker-list");

        // [...salt.children].sort((a,b) => (b.saltyness - a.saltyness).map(child => listenerCount.appendChild(child))
    }

    const needsSalt = () => {
        salty.sort((a,b) => (a.saltyness - b.saltyness))
    }
    
    useEffect(() => {
        axiosWithAuth()
            .get("/hackers/get")
            .then(res => {
                salty.push(res.data)
            })
            .catch(err => console.log(err.response))
    }, [])


    return (
        <div>
            <UserNav />
            <div>
                <button onClick={delProfile}>Delete Profile</button>
                
                <button onClick={()=><Route expact path="/change-pass/:id" render={props => (<ChangePassForm {...props} />)} />}>Change Password</button>
            </div>
            <div>
                <h1>Salty Hackers</h1>
                <div>
                    <button onClick={()=>{
                        // const salt = document.querySelector("#hacker-list");

                        // [...salt.children]
                        //     .sort((a,b) => (b.saltyness - a.saltyness)
                        //     .map(child => listenerCount.appendChild(child))
                    }} >The Saltiest</button>
                    <button onClick={needsSalt}>Needs More Salt</button>
                </div>
                <div id="hacker-list">
                    {props.hackers.map(hacker =>
                        <span key={hacker.id} aria-label="heart" role="img">❤️<button onClick={save}></button>{hacker}</span>)}
                </div>
            </div>
            </div>
        )



    
}

const mapStateToProps = state => {
    console.log("state", state)
    return{
        hackers: state.hackers,
        favorites: state.favorites,
        profile: state.id
    }
}
export default connect(mapStateToProps, {get, saveFav, removeFav})(UserProfile);

