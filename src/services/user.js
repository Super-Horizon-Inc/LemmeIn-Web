import AuthService from './AuthService.js';
import Data from "../providers/data-provider";

// import axios from "axios";

export default class User extends Data {

    constructor() {
    }

    storeSetting = async (discount, password) => {

        const username = await new AuthService().getCurrentUsername();
        
        return await fetch("localhost:8080/lemme/user/auth/setting", {
            method: 'PUT',
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({username:username, password:password, discount:discount})
            })
            .then(response => 
                response.json()          
            )
            .then(json => {
                return json.message;
            })
            .catch(error => {                   
                console.error(error);
            });
    }

}