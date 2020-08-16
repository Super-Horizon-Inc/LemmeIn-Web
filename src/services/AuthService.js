import axios from "axios";

export default class AuthService {

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.headers = {
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json'
            }
        };
    }

    getCurrentUsername = async () => {
        return await sessionStorage.getItem('username');
    }

    signin = () => {
        
        const customers = axios.post("http://localhost:8080/lemme/user/auth/signin", {
                username: this.username,
                password: this.password
            }, this.headers).then(response => {

                if (response.accessToken != null) {
                    sessionStorage.setItem('user', response.accessToken);
                    sessionStorage.setItem('username', response.username);                     
                }
                return response;
                
            }, (error) => {                   
                console.log(error);
            });

        return customers;

    }

    signup = () => {

        const customers = axios.post("http://localhost:8080/lemme/user/auth/signup", {
                username: this.username,
                password: this.password
            }, this.headers).then( (response) => {

                console.log(this.headers);

                if (response.accessToken != null) {
                    sessionStorage.setItem('user', response.accessToken);
                    sessionStorage.setItem('username', response.username);                   
                }
                return response;

            }, (error) => {                   
                console.log(error);
            });

        return customers;
        
    }


    logout = async () => {

        const message = await axios.post("http://localhost:8080/lemme/user/auth/logout", {
                username: this.username,
                password: this.password
            }, this.headers).then( (response) => {  

                if (response.message.indexOf('Logout successfully.') >= 0) {
                    sessionStorage.removeItem('user');
                    sessionStorage.removeItem('username');
                }        

                return response.message; 

            }, (error) => {                   
                console.log(error);
            });

        
        return message;

    }

}