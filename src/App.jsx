import React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Auth from "./components/authentication/auth";
import Logout from "./components/authentication/logout";
import authProvider from './providers/auth-provider';
import { createBrowserHistory } from 'history';
import Dashboard from "./components/user/dashboard";

const history = createBrowserHistory();
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Admin history={history} dashboard={Dashboard} logoutButton={Logout} loginPage={Auth} dataProvider={dataProvider} authProvider={authProvider}>
                <Resource name="users" list={ListGuesser} />
            </Admin>
        );
    }

}