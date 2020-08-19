import React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export default class CustomerList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <List {...this.props}>
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="firstName" />
                    <TextField source="lastName" />
                    <TextField source="phoneNumber" />
                    <EmailField source="email" />
                    <TextField source="dob" />
                    <TextField source="visitCounter" />
                </Datagrid>
            </List>
        );

    }

};