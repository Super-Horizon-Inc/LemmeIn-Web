import React, { useState, useEffect, useRef } from "react";
import "../../css/auth.scss";
import Login from "./login";
import Register from "./register";
import authProvider from '../../providers/auth-provider';
import { useLogin } from 'react-admin';

export default function Auth() {

    const [isLogginActive, setIsLogginActive] = useState(true);
    const [sideCardContainerStyle, setSideCardContainerStyle] = useState({backgroundColor: 'white'});
    const [sideCardTextStyle, setSideCardTextStyle] = useState({color: '#2B93C1'});
    const login = useLogin();
    let currentAuth = useRef();
    let authContainer = useRef();
    let rightSide = useRef();

    useEffect(() => {
        //Add .right by default
        rightSide.classList.add("right");
    });

    function changeState () {
        
        //We togglet component classes depending on the current active state 
        if (isLogginActive) {
            //Right side for login
            rightSide.classList.remove("right");
            rightSide.classList.add("left");
        } else {
            //Left side for Register 
            rightSide.classList.remove("left");
            rightSide.classList.add("right");
        }

        //Of course we need to toggel the isLogginActive by inversing it's previous state 
        setIsLogginActive(!isLogginActive);

        // we have to reset style of side card as well
        setSideCardContainerStyle({backgroundColor: 'white'})
        setSideCardTextStyle({color: '#2B93C1'});

    }

    async function lemmeIn (isLogin, username, password) {

        try {
                        
            const auth = isLogin === true 
                ? login({username, password})
                : await authProvider.signup(username, password);
            
            // log user in since this is a signup
            if (auth.accessToken != null) {
                login({username, password});
            }

        }
        catch(error) {
            console.log(error);
        }
            
    }

    function updateSideCard (isError) {
        if(!isError) {
            setSideCardContainerStyle({backgroundColor: '#dc3545'});
            setSideCardTextStyle({color: 'white'});
        }
        else {
            setSideCardContainerStyle({backgroundColor: 'white'});
            setSideCardTextStyle({color: '#2B93C1'});
        }
    }

    currentAuth = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
        <div className="App">
            <div className="login">
                <div className="container" ref={authContainer}>
                    {isLogginActive && (
                        <Login containerRef={ref => (currentAuth = ref)} updateSideCard={updateSideCard} lemmeIn={lemmeIn}/>
                    )}
                    {!isLogginActive && (
                        <Register containerRef={ref => (currentAuth = ref)} updateSideCard={updateSideCard} lemmeIn={lemmeIn}/>
                    )}
                </div>
                <RightSide
                    current={currentAuth}
                    currentActive={currentActive}
                    containerRef={ref => (rightSide = ref)}
                    onClick={changeState}
                    styles={{sideCardContainerStyle, sideCardTextStyle}}
                />
            </div>
        </div>
    );

}

const RightSide = (props)  => {
    
    return (
        <div style={props.styles.sideCardContainerStyle} className="right-side" ref={props.containerRef} onClick={props.onClick}>
            <div className="inner-container">
                <div className="text" style={props.styles.sideCardTextStyle}>{props.current}</div>
            </div>
        </div>
    );

};