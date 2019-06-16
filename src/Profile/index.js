import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import ProfileView from "./ProfileView";
import './Profile.scss';
import Login from "./Login";

@inject('stores')
@observer
class Profile extends Component {
    render() {
        let user = this.props.stores.ProfileStore.user;
        if(user){
            return <ProfileView/>;
        }
        return <Login/>;
    }
}

export default Profile;