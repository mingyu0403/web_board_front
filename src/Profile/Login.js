import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class Login extends Component {
    state = {
        id: '',
        password: '',
        goToList: false
    };
    render() {
        if(this.state.goToList)
            return <Redirect to={'/'}/>;
        return (
            <div id='login-page'>
                <h2>로그인</h2>
                <div>
                    <input onChange={this.updateId}/>
                </div>
                <div>
                    <input type='password' onChange={this.updatePassword} />
                </div>
                <div>
                    <button onClick={this.onLogin}>로그인</button>
                </div>
            </div>
        );

    }

    onLogin = async () => {
        await this.props.stores.ProfileStore.loginUser(this.state.id, this.state.password)
        if(this.props.stores.ProfileStore.user){
            this.setState({
                ...this.state,
                goToList: true
            })
        }
    }

    onLogout = () => {
        this.props.stores.ProfileStore.user = null;
        this.setState({
            ...this.state
        })
    }

    updateId = event => {
        this.setState({
            ...this.state,
            id: event.target.value
        });
    };
    updatePassword = (event) => {
        this.setState({
            ...this.state,
            password: event.target.value
        });
    };
}

export default Login;