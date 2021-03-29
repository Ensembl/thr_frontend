import React, {Component} from 'react'
import * as settings from '../settings';
import axios from "axios";
import UserProfile from "./UserProfile";
import UserTrackhubs from "./UserTrackhubs";

class User extends Component {

    constructor() {
        super();
        this.state = {
            userInfo: [],
            UserHubs: []
        };
    }

    getUserInfo() {
        const token = localStorage.getItem('token');
        const apiUrlTrackdbs = `${settings.API_SERVER}/api/search/trackdb/1/`;
        const apiUrlUserInfo = `${settings.API_SERVER}/api/user/`;

        axios.get(apiUrlUserInfo, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                    // 'Access-Control-Allow-Origin': '*',
                }
            }
        )
        .then(response => {
            console.log("getUserInfo response ---> ", response)
            this.setState({userInfo: response.data});
        })
        .catch(err => {
            console.log(err)
        });
    }

    getUserHubs() {
        const token = localStorage.getItem('token');
        const apiUrlUserHubs = `${settings.API_SERVER}/api/trackhub/`;

        axios.get(apiUrlUserHubs, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                    // 'Access-Control-Allow-Origin': '*',
                }
            }
        )
        .then(response => {
            console.log("getUserHubs response ---> ", response)
            this.setState({UserHubs: response.data});
        })
        .catch(err => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.getUserInfo()
        this.getUserHubs()
    }

    render() {
        return (
            <div>
                <UserProfile userInfo = {this.state.userInfo}></UserProfile>
                <UserTrackhubs UserHubs = {this.state.UserHubs}></UserTrackhubs>
            </div>
        )
    }

}

export default User


