import React from "react";
import authImg from "../../images/auth.svg";
import { Form, Button } from 'react-bootstrap';

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            isBtnClicked: false,
            username: "",
            password: ""
        }
    }

    register = (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            // stop form from being submitted to server
            event.preventDefault();
            event.stopPropagation();

            // form is invalid so card
            this.props.updateSideCard(false);

        }
        else {
            // form is valid so card
            this.props.updateSideCard(true);

            // authenticate user
            event.preventDefault();
            this.props.lemmeIn(false, this.state.username, this.state.password);
        }

        this.setState({ validated: true, isBtnClicked: true });
    };

    onInputChange = (event) => {

        if(event.currentTarget.name === 'username') {
            this.setState({username: event.currentTarget.value});
        }
        else {
            this.setState({password: event.currentTarget.value});
        }

        if(this.state.isBtnClicked) {
            
            const form = event.currentTarget.parentNode.parentNode;
            if (form.checkValidity()) {
                // form is valid so card
                this.props.updateSideCard(true);
            }
            else {
                // form is invalid so card
                this.props.updateSideCard(false);
            }

        }

    }

    render() {

        return (
            <div className="base-container" ref={this.props.containerRef}>

                <div className="header">Register</div>

                <div className="content">

                    <div className="image">
                        <img src={authImg} alt="authentication" />
                    </div>

                    <Form className="form" noValidate validated={this.state.validated} onSubmit={this.register}>

                        <Form.Group>
                            <Form.Label htmlFor="username">Username</Form.Label>
                            <Form.Control onChange={this.onInputChange} autoComplete="off" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                                            type="email" name="username" value={this.state.username} placeholder="john.doe@gmail.com" 
                                            required></Form.Control>
                            <Form.Text className="text-muted" style={{ marginTop: -20 }}>Please enter your email address</Form.Text>
                            <Form.Control.Feedback style={{ textAlign: 'left' }} type="invalid">Please type a valid email address</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control minLength="6" maxLength="40" onChange={this.onInputChange} autoComplete="off" type="password" 
                                            value={this.state.password} name="password" placeholder="******" required></Form.Control>
                            <Form.Text className="text-muted" style={{ marginTop: -20 }}>Must be 6-40 characters</Form.Text>
                            <Form.Control.Feedback style={{ textAlign: 'left' }} type="invalid">Password must be between 6-40 characters</Form.Control.Feedback>
                        </Form.Group>

                        <div className="footer">
                            <Button type="submit" className="btn">Register</Button>
                        </div>

                    </Form>

                </div>

            </div>
        );

    }

}