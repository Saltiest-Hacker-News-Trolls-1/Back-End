import React, {useEffect} from 'react';
import UserNav from "./UserNav";
import {get} from "../../store/actions/AuthAction";
import {connect} from "react-redux"

const UserProfile = () => {

    useEffect(() => {
        props.get()
    }, [])

    // const saveFav = item => {

    // }

    // const removeFav = item => {

    // }

    return(
        <>
            <UserNav />
            <div>
                <h1>Salty Hackers</h1>
                <div>
                    {props.hackers.map(hacker => 
                    <p key={hacker.id}><button></button>{hacker}</p>)}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return{
        hackers: state.hackers
    }
}

export default connect(mapStateToProps,{get})(UserProfile);