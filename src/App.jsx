import React from "react";
import "./css/app.scss";
import { Login, Register } from "./components/authentication/index";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true,
            sideCardContainerStyle: {
                backgroundColor: 'white'
            },
            sideCardTextStyle: {
                color: '#2B93C1'
            }
        };
    }

    componentDidMount() {
        //Add .right by default
        this.rightSide.classList.add("right");
    }

    changeState() {
        //ES6 Object Destructuring
        const { isLogginActive } = this.state;

        //We togglet component classes depending on the current active state 
        if (isLogginActive) {
            //Right side for login
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        } else {
            //Left side for Register 
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }

        //Of course we need to toggel the isLogginActive by inversing it's previous state 
        this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));

        // we have to reset style of side card as well
        this.setState({sideCardContainerStyle: {backgroundColor: 'white'}, sideCardTextStyle: {color: '#2B93C1'}});

    }

    updateSideCard = (isError) => {
        if(!isError) {
            this.setState({sideCardContainerStyle: {backgroundColor: '#dc3545'}, sideCardTextStyle: {color: 'white'}});
        }
        else {
            this.setState({sideCardContainerStyle: {backgroundColor: 'white'}, sideCardTextStyle: {color: '#2B93C1'}});
        }
    }

    render() {
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "Register" : "Login";
        const currentActive = isLogginActive ? "login" : "register";
        return (
            <div className="App">
                <div className="login">
                    <div className="container" ref={ref => (this.container = ref)}>
                        {isLogginActive && (
                            <Login containerRef={ref => (this.current = ref)} updateSideCard={this.updateSideCard}/>
                        )}
                        {!isLogginActive && (
                            <Register containerRef={ref => (this.current = ref)} updateSideCard={this.updateSideCard}/>
                        )}
                    </div>
                    <RightSide
                        current={current}
                        currentActive={currentActive}
                        containerRef={ref => (this.rightSide = ref)}
                        onClick={this.changeState.bind(this)}
                        parent={this}
                    />
                </div>
            </div>
        );
    }
}

const RightSide = props => {
    return (
        <div
            style={props.parent.state.sideCardContainerStyle}
            className="right-side"
            ref={props.containerRef}
            onClick={props.onClick}
        >
            <div className="inner-container">
                <div className="text" style={props.parent.state.sideCardTextStyle}>{props.current}</div>
            </div>
        </div>
    );
};