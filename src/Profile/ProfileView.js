import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import ProfileEdit from "./ProfileEdit";
import {Link} from "react-router-dom";

@inject('stores')
@observer
class ProfileView extends Component {
    state = {

    }
    render() {
        let user = this.props.stores.ProfileStore.user;
        return (
            <div>
                <div>account : {user.account}</div>
                <div>username : {user.username}</div>
                <div>email : {user.email}</div>
                <div>created : {user.created}</div>
                <div>updated : {user.updated}</div>
                <button><Link to='profile/edit'>수정</Link></button>
            </div>
        );
    }
}

export default ProfileView;