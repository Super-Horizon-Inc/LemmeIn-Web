import React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default class Dashboard extends React.Component { 
    
    render() {
        return (
            <Card>
                <CardHeader title="Welcome to the administration" />
                <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card>
        );
    }
}