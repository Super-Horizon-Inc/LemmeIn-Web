import React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Auth from "./components/authentication/auth";
import Logout from "./components/authentication/logout";
import authProvider from './providers/auth-provider';
import dataProvider from './providers/data-provider';
import { createBrowserHistory } from 'history';
import Dashboard from "./components/user/dashboard";
import CustomerList from './components/user/customer-list';
import Setting from './components/user/setting';
import MyLayout from './components/user/MyLayout';
import customRoutes from './components/user/CustomRoutes';

const history = createBrowserHistory();
export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Admin history={history} dashboard={Dashboard} layout={MyLayout} customRoutes={customRoutes} logoutButton={Logout} loginPage={Auth} dataProvider={dataProvider} authProvider={authProvider}>
                <Resource name="customers" list={CustomerList} />
                {/* <Resource name="setting" list={Setting} /> */}
                {/* edit={Setting} /> */}
            </Admin>
        );
    }

}