import React, { useEffect } from 'react';
import UserNav from "./UserNav";
import { get } from "../../store/actions/AuthAction";
import { connect } from "react-redux"
import { saveFav, removeFav } from "../../store/actions/FavsAction";
import RemoveFavList from "./RemoveFavList";
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Route, Link } from "react-router-dom";
import ChangePassForm from "./ChangePassForm";
import { Card, Col, Button } from "reactstrap";



class UserProfile extends React.Component {


    constructor() {
        super()
        if(process.env.NODE_ENV === 'development') {
            this.state = {
                hackers: [{ id: "john", negativity: -.5 },
                { id: "dan", negativity: .5 },
                { id: "sally", negativity: -0.0 },
                { id: "john", negativity: -.5 },
                { id: "dan", negativity: .5 },
                { id: "sally", negativity: -0.0 },
                { id: "john", negativity: -.5 },
                { id: "dan", negativity: .512348 },
                { id: "sally", negativity: -0.0 },
                { id: "sally", negativity: -0.0 }]
            }
        } else {
            this.state = {
                hackers: []
            }
        }
        this.state.hackers.sort((element1, element2) => {
            return (element1.negativity - element2.negativity)
        });
        this.state.hackers.map((element) => {
            element.negativity = element.negativity.toFixed(1);
        });
    }

    

    componentDidMount() {
        console.log(this);
        axiosWithAuth()
            .get("/hackers/get")
            .then(response => {
                console.log('loginRes', response.data);
                this.setState({ hackers: response.data });
                this.state.hackers.sort((element1, element2) => {
                    return (element1.negativity - element2.negativity)
                });
                this.state.hackers.map((element) => {
                    element.negativity = element.negativity.toFixed(1);
                });
            })
            .catch(error => {
                console.log(`Server responded with ${error.response.data.msg}`);
                // setStatus(erro/r)
            });

        
    }



    delProfile = () =>{
        console.log(this.state.hackers)
        axiosWithAuth()
        .delete(`/user/deleteAccount/`)
        .catch(err => console.log(err.response))
    }
    

    saltiest = () => {
        
        const salt = document.querySelector("ul")
        // [...salt.children]
        //     .sort((a,b) => (b.negativity - a.negativity))
        //     .map(child => salt.appendChild(child))]
        console.log([...salt.children].sort((a,b) => (b.negativity - a.negativity)))
    }       


    render() {


    
        return (
            <div>
                <UserNav />

                <div className="buttons">
                    <Link to="/change-pass">
                    <Button color="info">Change Password</Button>
                    </Link>
                </div>
                
                <ul className="m-0 p-0" id="#hacker-list">
                    {
                        // console.log('this.state', this.state)
                        this.state.hackers.map((item, index) => (
                            <Col xs="12" sm="10" md="6" lg="4" className=" mx-auto my-3">
                                <Card key={index} style={{ backgroundColor: 'white', color: "black", display: "flex", flexFlow: "row nowrap", alignItems: "center", justifyContent: "space-between" }} className="shadow" >
                                    <div className="counter-container mx-4" style={{ display: "flex", flexFlow: "column nowrap", justifyContent: "space-between", background: "inherit", color: "inherit" }}>
                                        <h1 style={{ background: "inherit", color: "blue", textAlign: "center" }}>&#9650;</h1>
                                        <h2 style={{ background: "inherit", color: "black" }} className="mx-auto">{item.negativity}</h2>
                                        <h1 style={{ background: "inherit", color: "red", textAlign: "center" }}>&#9660;</h1>
                                    </div>
                                    <h2 className="mx-auto" style={{ background: "inherit", color: "inherit" }}>Post made by user {item.id} </h2>
                                </Card>
                            </Col>
                        ))
                    }

                </ul>

                <div className="buttons">
                    <Button color="danger" onClick={this.delProfile}>Delete Profile</Button>
                </div>

            </div>
        )
    }
}
 
 

export default UserProfile;