import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';

@inject('stores')
@observer
class ProfileEdit extends Component {
    state = {
        id: this.props.stores.ProfileStore.user.id,
        password: '',
        username: this.props.stores.ProfileStore.user.username,
        email: this.props.stores.ProfileStore.user.email,
        goToProfile: false
    };

    render() {
        if(this.state.goToProfile)
            return <Redirect to={'/profile'}/>;
        return (
            <div>
                <div>
                    <div>
                        password <input value={this.state.password} onChange={this.updatePassword}/>
                    </div>
                    <div>
                        username <input value={this.state.username} onChange={this.updateUsername}/>
                    </div>
                    <div>
                        email <input value={this.state.email} onChange={this.updateEmail}/>
                    </div>
                </div>
                <button onClick={this.editProfile}>확인</button>
            </div>
        );
    }

    updateUsername = event => {
        this.setState({
            ...this.state,
            username: event.target.value
        });
    };
    updateEmail = (event) => {
        this.setState({
            ...this.state,
            email: event.target.value
        });
    };
    updatePassword = (event) => {
        this.setState({
            ...this.state,
            password: event.target.value
        });
    };

    editProfile = async () => {
        if(await this.props.stores.ProfileStore.editUser(this.state)) {
            await this.props.stores.ProfileStore.loginUser(this.props.stores.ProfileStore.user.account, this.state.password);
            this.setState({
                ...this.state,
                goToProfile: true
            })
        }
    };
}

export default ProfileEdit;