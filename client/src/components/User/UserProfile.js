import React, { useEffect } from 'react';
import UserNav from "./UserNav";
import { get } from "../../store/actions/AuthAction";
import { connect } from "react-redux"
import { saveFav, removeFav } from "../../store/actions/FavsAction";
import RemoveFavList from "./RemoveFavList";
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Route } from "react-router-dom";
import ChangePassForm from "./ChangePassForm";

class UserPfrofile extends React.Component {
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
        console.log('componentDidMount')
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
    render() {


        return (
            <div>
                <UserNav />
                <ul>
                    {
                        // console.log('this.state', this.state)
                        this.state.hackers.map((item, index) => (
                            <li key={index}>{item.id}</li>
                        ))
                    }

                </ul>
                {/* <div>
                    <button onClick={delProfile}>Delete Profile</button>
                    <button onClick={() => <Route expact path="/change-pass/:id" render={props => (<ChangePassForm {...props} />)} />}>Change Password</button>
                </div>
                <div>
                    <h1>Salty Hackers</h1>
                    <div>
                        {props.hackers.map(hacker =>
                            <span key={hacker.id} aria-label="heart" role="img">❤️<button onClick={save}></button>{hacker}</span>)}
                    </div>
                </div>
                <div>

                    <div>
                        <RemoveFavList remove={remove} favorites={props.favorites} />
                    </div>
                </div> */}
            </div >
        )
    }
}
// const UserProfile = props => {

//     useEffect(() => {
//         props.get();
//     }, [])

//     // const updatePass = e => {

//     //     e.preventDefault();

//     //     axiosWithAuth()
//     //         .put(`/user/changePass/${props.match.params.id}`, props.profile.password)
//     //         .catch(err => console.log(err.response))
//     // }

//     const delProfile = () =>{
//         axiosWithAuth()
//             .delete(`/user/deleteAccount/${props.match.params.id}`)
//             .catch(err => console.log(err.response))
//     }

//     const save = item => {
//         props.saveFav(item);
//     }

//     const remove = item => {
//         props.removeFav(item);
//     }

//     return (
//         <div>
//             <UserNav />
//             <div>
//                 <button onClick={delProfile}>Delete Profile</button>
//                 <button onClick={()=><Route expact path="/change-pass/:id" render={props => (<ChangePassForm {...props} />)} />}>Change Password</button>
//             </div>
//             <div>
//                 <h1>Salty Hackers</h1>
//                 <div>
//                     {props.hackers.map(hacker =>
//                         <span key={hacker.id} aria-label="heart" role="img">❤️<button onClick={save}></button>{hacker}</span>)}
//                 </div>
//             </div>
//             <div>

//                 <div>
//                     <RemoveFavList remove={remove} favorites={props.favorites} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// // const mapDispatchToProps = {
// //     saveFav,
// //     get,
// //     removeFav
// // }

// const mapStateToProps = state => {
//     console.log("state", state)
//     return{
//         hackers: state.hackers,
//         favorites: state.favorites,
//         profile: state.id
//     }
// }

// export default connect(mapStateToProps, {get, saveFav, removeFav})(UserProfile);
export default UserPfrofile