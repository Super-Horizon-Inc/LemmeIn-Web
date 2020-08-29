import React from "react";
import { SelectInput, Edit, TextInput, EditButton, SimpleForm, List, BooleanInput  } from 'react-admin';
import dataProvider from '../../providers/data-provider';

export default class Setting extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            //message : "",
            //discount: {by: 'BOTH', type: '$', amount: 10, visitTimes: 2}
            //discount: null
            discount: {
                by: "BOTH",
                amount: 0,
                type: 1,
                visitTimes: 0
            },
        }
    }

    componentDidMount() {
        const username = sessionStorage.getItem('username');
        const userId = sessionStorage.getItem('userId');

        dataProvider.setting('user/setting/'+ userId, {
            username: username,
            discount: this.state.discount
        }).then((json) => {
            this.setState({
                message : json.data
            })
        });
    }

    render() {
        return(
            // <Edit {...this.props}>     
                <SimpleForm>
                    <BooleanInput label="Toggle" />
                    <SelectInput source="by" choices={[
                        { id: 'visit', name: 'visit' },
                        { id: 'dob', name: 'dob' },
                        { id: 'both', name: 'both' },
                        ]} 
                    />
                    <TextInput label="Amount" source="amount" />
                    <SelectInput source="type" choices={[
                        { id: '$', name: '$' },
                        { id: '%', name: '%' },
                        ]} 
                    />
                    <TextInput label="Visitting Times" source="visitTimes" />
                </SimpleForm>
            // </Edit>
        );
    }
}