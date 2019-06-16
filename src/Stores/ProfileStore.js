import {observable, action} from "mobx";
import axios from 'axios';

class ProfileStore {
    static __instance = null;
    static getInstance(){
        if(ProfileStore.__instance === null)
            ProfileStore.__instance = new ProfileStore();
        return ProfileStore.__instance;
    }
    constructor(){
        ProfileStore.__instance = this;
    }

    @observable user = null;
    @action loginUser = async (account, password) => {
        try {
            this.user = null;
            let response = await axios({
                url: `http://localhost:8080/loginUser/${account}/${password}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.status === 200){
                this.user = response.data;
            }

        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @action editUser = async (user) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/editUser`,
                method: 'put',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(user)
            });
            return (response.status === 200);
        } catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    }
}

export default ProfileStore.getInstance();