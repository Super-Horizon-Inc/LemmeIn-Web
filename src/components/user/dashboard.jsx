import React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import dataProvider from '../../providers/data-provider';

export default class Dashboard extends React.Component { 

    constructor(props) {

        super(props);

        this.state = {
            customerCount: 0,
        }

    }

    componentDidMount() {
        dataProvider.getList('customers', {}).then((json) => {
            //console.log(json);
            this.setState({customerCount: json.data.length});
        });
    }
    
    render() {

        return (
            <Card>
                <CardHeader title="Welcome to your LemmeIn administration portal" />
                <CardContent>Number of customers visited your bussiness so far: {this.state.customerCount}</CardContent>
            </Card>
        );

    }

}