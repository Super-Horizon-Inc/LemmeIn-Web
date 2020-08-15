import React from "react";
import loginImg from "../../images/authentication.svg";

export class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="john.doe@gmail.com" />
                            <small id="emailHelp" className="text-muted" style={{marginTop: -20}}>Please enter your email address</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="******" />
                            <small id="passwordHelp" className="text-muted" style={{marginTop: -20}}>Must be 6-40 characters</small>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Register
                    </button>
                </div>
            </div>
        );

    }

}