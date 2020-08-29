import axios from "axios";

const authProvider = {

    username: "",
    password: "",

    getUsername () {
        return sessionStorage.getItem('username');
    },

    // called when the user attempts to sign up
    signup (username, password) {

        this.username = username;
        this.password = password;

        return axios.post("http://localhost:8080/lemme/user/auth/signup", {
                username: username,
                password: password
            }).then( (response) => {

                const json = response.data;

                if (json.accessToken != null) {
                    sessionStorage.setItem('token', json.accessToken);
                    sessionStorage.setItem('username', json.username);
                    sessionStorage.setItem('userId', json.userId);                 
                }

                return json;

            }, (error) => {                   
                console.log(error);
            });
        
    },

    // called when the user attempts to log in
    login ({username, password}) {

        this.username = username;
        this.password = password;
        
        return axios.post("http://localhost:8080/lemme/user/auth/signin", {
                username: username,
                password: password
            }).then(response => {

                const json = response.data;

                if (json.accessToken != null) {
                    sessionStorage.setItem('token', json.accessToken);
                    sessionStorage.setItem('username', json.username);   
                    sessionStorage.setItem('userId', json.userId);      
                }

                return json;

            }, (error) => {                   
                console.log(error);
            });

    },

    // called when the user clicks on the logout button
    logout () {

        axios.post("http://localhost:8080/lemme/user/auth/logout", {
                username: this.username,
                password: this.password
            }).then( (response) => {  

                if (response.data.message.indexOf('Logout successfully.') >= 0) {
                    sessionStorage.removeItem('token');
                    sessionStorage.removeItem('username');
                }

            }, (error) => {                   
                console.log(error);
            });

        return Promise.resolve();

    },

    // called when the API returns an error
    checkError (error) {

        const status = error.status;
        if (status === 400 || status === 401 || status === 403) {

            sessionStorage.removeItem('token');
            sessionStorage.removeItem('username');

            return Promise.reject();

        }

        return Promise.resolve();

    },

    // called when the user navigates to a new location, to check for authentication
    checkAuth () {
        return this.getUsername() ? Promise.resolve() : Promise.reject();
    },

    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        return Promise.resolve();
    }

}

export default authProvider;