import React, { useEffect } from 'react';
import UserNav from "./UserNav";
import { get } from "../../store/actions/AuthAction";
import { connect } from "react-redux"
import { saveFav, removeFav } from "../../store/actions/FavsAction";
import RemoveFavList from "./RemoveFavList";
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Route } from "react-router-dom";
import ChangePassForm from "./ChangePassForm";



class UserProfile extends React.Component {


    constructor() {
        super()
        this.state = {
            hackers: [{ id: "john", negativity: -.5 },
            { id: "dan", negativity: .5 },
            { id: "sally", negativity: -0.0 },
            { id: "john", negativity: -.5 },
            { id: "dan", negativity: .5 },
            { id: "sally", negativity: -0.0 },
            { id: "john", negativity: -.5 },
            { id: "dan", negativity: .5 },
            { id: "sally", negativity: -0.0 },
            { id: "sally", negativity: -0.0 }]
        }
    }

    

    componentDidMount() {
        console.log(this);
        axiosWithAuth()
            .get("/hackers/get")
            .then(response => {
                console.log('loginRes', response.data);
                // this.setState({ hackers: response.data })
            })
            .catch(error => {
                console.log(`Server responded with ${error.response.data.msg}`);
                // setStatus(erro/r)
            });

        
    }



    delProfile = () =>{
        console.log(this.hackers.id)
        axiosWithAuth()
        .delete(`/user/deleteAccount/${this.props.match.params.id}`)
        .catch(err => console.log(err.response))
    }
    

 


    render() {


    
        return (
            <div>
                <UserNav />
                <div className="profile">
                <div>
                    <button onClick={this.delProfile}>Delete Profile</button>

                    <Route expact path="/change-pass/:id" render={props => (<ChangePassForm {...props} />)} >
                    <button type="button"
                    >Change Password</button></Route>
                </div>
                 <div className="hacker">
                        {
                            // console.log('this.state', this.state)
                            this.state.hackers.map(item => (
                                <div className="hacker-card">
                                    <button>❤️</button>
                                    <p>Hacker: {item.id}</p>
                                    <p>Saltiness: {item.negativity}</p>
                                </div>
                            ))
                        }
                 </div>

                </div>
               
            </div >
        )
    }
}
 


export default UserProfile;