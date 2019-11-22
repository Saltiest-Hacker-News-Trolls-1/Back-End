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
        if (process.env.NODE_ENV === 'development') {
            this.state = {
                busyHackers: [{ id: "john", negativity: -.5, positivity: 0.5, commentcount: 25 },
                { id: "dan", negativity: .5, positivity: 52438, commentcount: 78 },
                { id: "sally", negativity: -0.120390, positivity: 0.0, commentcount: 1 },
                { id: "john", negativity: -.5, positivity: -0.120390, commentcount: 23 },
                { id: "dan", negativity: .52438, positivity: -1.00000000000000000000, commentcount: 43 },
                { id: "sally", negativity: -0.0, positivity: -0.120390, commentcount: 560 },
                { id: "john", negativity: -.5, positivity: 5, commentcount: 90 },
                { id: "dan", negativity: .512348, positivity: 5, commentcount: 44 },
                { id: "sally", negativity: 0.0, positivity: .52438, commentcount: 12 },
                { id: "sally", negativity: -1.00000000000000000000, positivity: 1, commentcount: 41 }],
                meanHackers: [{ id: "john", negativity: -.5, compoundkarma: 250, commentcount: 25 },
                { id: "dan", negativity: .5, compoundkarma: 15, commentcount: 78 },
                { id: "sally", negativity: -0.120390, compoundkarma: 10, commentcount: 1 },
                { id: "john", negativity: -.5, compoundkarma: 300, commentcount: 23 },
                { id: "dan", negativity: .52438, compoundkarma: 65, commentcount: 43 },
                { id: "sally", negativity: -0.0, compoundkarma: 234, commentcount: 560 },
                { id: "john", negativity: -.5, compoundkarma: 8, commentcount: 90 },
                { id: "dan", negativity: .512348, compoundkarma: 234, commentcount: 44 },
                { id: "sally", negativity: 0.0, compoundkarma: 456, commentcount: 12 },
                { id: "sally", negativity: -1.00000000000000000000, compoundkarma: 5, commentcount: 41 }]
            }
        } else {
            this.state = {
                busyHackers: [],
                meanHackers: []
            }
        }
        // this.state.hackers.sort((element1, element2) => {
        //     return (element1.negativity - element2.negativity)
        // });

        // this.state.hackers.map((element) => {
        //     element.negativity = element.negativity.toFixed(1);
        // });
    }



    componentDidMount() {
        axiosWithAuth()
            .get("/hackers/getBusy")
            .then(response => {
                console.log('loginRes', response.data);
                this.setState({ busyHackers: response.data });
            })
            .catch(error => {
                console.log(`Server responded with ${error.response.data.msg}`);
            });

        axiosWithAuth()
            .get("/hackers/getMean")
            .then(response => {
                console.log('meanies', response.data);
                this.setState({ meanHackers: response.data });
            })
            .catch(error => {
                console.log(`Server responded with ${error.response.data.msg}`);
            });
    }
    truncateDecimals = (number, digits) => {
        var multiplier = Math.pow(10, digits),
            adjustedNum = number * multiplier,
            truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

        return truncatedNum / multiplier;
    };
    delProfile = () => {
        console.log(this.state.hackers)
        axiosWithAuth()
            .delete(`/user/deleteAccount/`)
            .catch(err => console.log(err.response))
    }

    render() {
        return (
            <div>
                <UserNav />
                <div className="hacker-container-container">
                    <div className="hacker-choices">
                        <span>Order this real data by meanest, then by least nice - our models are very sophisticated and don't simply inverse this kind of data!</span>
                        <div className="hacker-choice-buttons">
                            <button onClick={() => this.setState({ busyHackers: this.state.busyHackers.sort((a, b) => (b.negativity - a.negativity)) })}>Meanest</button>
                            <button onClick={() => this.setState({ busyHackers: this.state.busyHackers.sort((a, b) => (a.positivity - b.positivity)) })}>Least Nice</button>
                            <button onClick={() => this.setState({ busyHackers: this.state.busyHackers.sort((a, b) => (b.commentcount - a.commentcount)) })}>Busiest</button>
                        </div>
                    </div>
                    <div className="labels-busy"><span>Saltyness</span><span>Positivity</span><span>Comments</span><span>Name</span></div>
                    <div className="hackers-container">
                        {
                            this.state.busyHackers.map((item, index) => (
                                <div className="hacker-row">
                                    <div className="hacker-data">
                                        <span>{this.truncateDecimals(item.negativity, 2)}</span>
                                    </div>
                                    <div className="hacker-data">
                                        <span >{this.truncateDecimals(item.positivity, 2)}</span>
                                    </div>
                                    <div className="hacker-data">
                                        <span >{item.commentcount}</span>
                                    </div>
                                    <div className="hacker-data">
                                        <a target="_blank" className="hacker-link" href={"https://news.ycombinator.com/user?id=" + item.id}><span>{item.id} </span></a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="hacker-choices">
                    <span>These are the meanest, most salty hackers on hacker news.See how many upvoates they have! Then go and find them</span>
                    <div className="hacker-choice-buttons">
                        <button onClick={() => this.setState({ meanHackers: this.state.meanHackers.sort((a, b) => (b.negativity - a.negativity)) })}>Meanest</button>
                        <button onClick={() => this.setState({ meanHackers: this.state.meanHackers.sort((a, b) => (a.commentcount - b.commentcount)) })}>Busiest</button>
                        <button onClick={() => this.setState({ meanHackers: this.state.meanHackers.sort((a, b) => (b.compoundkarma - a.compoundkarma)) })}>Most Upvotes</button>
                    </div>
                </div>
                <div className="labels-busy"><span>Saltyness</span><span>Upvotes</span><span>Comments</span><span>Name</span></div>

                <div className="hackers-container">
                    {
                        this.state.meanHackers.map((item, index) => (
                            <div className="hacker-row">
                                <div className="hacker-data">
                                    <span>{this.truncateDecimals(item.negativity, 2)}</span>
                                </div>
                                <div className="hacker-data">
                                    <span >{item.compoundkarma}</span>
                                </div>
                                <div className="hacker-data">
                                    <span >{item.commentcount}</span>
                                </div>
                                <div className="hacker-data">
                                    <a target="_blank" className="hacker-link" href={"https://news.ycombinator.com/user?id=" + item.id}><span>{item.id} </span></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="profile-buttons">
                    <div className="buttons">
                        <Button color="danger" onClick={this.delProfile}>Delete Profile</Button>
                    </div>
                    <div className="buttons">
                        <Link to="/change">
                            <Button color="info">Change Password</Button>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default UserProfile;