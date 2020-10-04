

import React, { Component } from "react";
// import { ip } from '../server/iplocation'

import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    ImageBackground,
    Dimensions
} from "react-native";
import { connect } from 'react-redux';

import DefaultInput from "../components/Component/DefaultInput";
import HeadingText from "../components/Component/HeadingText";
import MainText from "../components/Component/MainText";
import validate from "../utility/validation";
import ButtonWithBackground from "../components/Component/ButtonWIthBackground";
import * as authActions from '../store/actions/auth';
import * as ipActions from '../store/actions/ip';

/**
 * This is the main entry screen to the app
 * The user is able to sign in or signup for a new account 
 */
class Authentication extends Component {
    state = {
        newIPAddress: '',
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        controls: {
            email: {
                value: "9841122040",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "abc",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: "password"
                },
                touched: false
            }

        }
    };
/**
 * The constructor listens for orientation changes
 */
    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

/**
 * Updates style based on the window height(landscape or portrait)
 */
    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    };

/**
 * checks for mode change between login and signup 
*/

    switchAuthModeHandler = () => {
        // this.setState(prevState => {
        //     return {
        //         authMode: prevState.authMode === "login" ? "signup" : "login"
        //     };
        // });
        this.props.switchMode();
    };
/**
 *  Performs signup or login option based on loginMode state
 */
    onButtonPress = async () => {
        if (this.props.loginMode) {
            this.props.authLogin(this.state.controls.email.value, this.state.controls.password.value)
        }
        else {

            this.props.authSignUp(this.state.controls.email.value, this.state.controls.password.value)
        }
    }
/**
 * updates the password and confirm password states after validation
 * 
 * @param {string} value - Input value to password field
 */
    updateInputState = (key, value) => {
        let connectedValue = {};//used for confirm password
        if (this.state.controls[key].validationRules.equalTo) {//checking if the validation rule consists of equalTo field , here it is valid only for confirmPassword control
            const equalControl = this.state.controls[key].validationRules.equalTo; //storing the fiel_name to which the value of confirm value should be equal ie. field 'password' 
            const equalValue = this.state.controls[equalControl].value;//the value stored in state password ie. field name mentioned above
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue //storing the current typed password value
            };
        }
        if (key === "password") {//this check is needed in case password is typed after confirm or password is changed 
            connectedValue = { //connected value should contain the latest changed value either password or confirm
                ...connectedValue,
                equalTo: value
            };
        }
        if (key === "password") {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            };
        }
        this.setState(prevState => {
            return {
                controls: { //root level state object
                    ...prevState.controls,//spreading all unchanged values
                    confirmPassword: { //this is necessary only because password can be changed later after typing passord otherwise normal validation would have done the job
                        ...prevState.controls.confirmPassword,
                        valid:
                            key === "password"//if password is being typed 
                                ? validate(
                                    prevState.controls.confirmPassword.value, //passing confirm state value
                                    prevState.controls.confirmPassword.validationRules, //rule name
                                    connectedValue//currently typed value
                                )
                                : prevState.controls.confirmPassword.valid//do not change if key is not password ie confirm password or other fields are bieng changed
                    },
                    [key]: {// for every key/fields 
                        ...prevState.controls[key],
                        value: value, //change the value on keypress
                        valid: validate( //check validation for every keystroke
                            value,
                            prevState.controls[key].validationRules,
                            connectedValue //isn't necessarily used all the time but still passed
                        ),
                        touched: true
                    }
                }
            };
        });
    };
    async componentDidMount() {
        this.isAuthenticated = this.props.token;
        try {
            await AsyncStorage.setItem('mode', "static");

        } catch (error) {
        }

    }
    componentDidUpdate(prevState) {
        console.log("componentdidupdate", this.isAuthenticated, this.props.token)
        if (this.isAuthenticated !== this.props.token && this.props.token) {
            console.log('inside componentdidupdate')
            this.props.navigation.navigate({
                routeName: 'Tabs',
                params: {
                    userId: this.props.userId
                }
            }
            )
        }
    }
    /**
 * Handles changing ip of background 
 */
    changeIPHandler = () => {
        this.props.changeMode();
    }
    submitIP = () => {

        if (this.state.newIPAddress) {
            this.props.changeMode();
            this.props.updateIP(this.state.newIPAddress)

        }
    }
    updateIpState = val => {
        this.setState({ ...this.state, newIPAddress: val })
    }
    /**
 * Renders form for login/ signup based on the mode
 */
    render() {

        let headingText = null;
        let confirmPasswordControl = null;

        if (this.state.viewMode === "portrait" && this.props.loginMode) {
            headingText = (
                <MainText data-test="headingText">
                    <HeadingText>Please Login </HeadingText>
                </MainText>
            );
        }
        let newIPAddress = null;
        let changeIPAddress = null;
        console.log("mode changable",this.props.mode)
        if (this.props.mode === "changable") {
            console.log("change mode created", this.props.newIP)
            changeIPAddress = (<ButtonWithBackground
                data-test="changeIP" 
                color="#29aaf4"
                style={styles.changIPAddressButton}
                onPress={this.changeIPHandler}
            >
                Change IP
            </ButtonWithBackground>);
        }
        if (this.props.newIP) {
            changeIPAddress = null;
            newIPAddress = (<View style={styles.changeIP}                
            ><DefaultInput
                placeholder="IP Address"
                style={styles.changeIPInput}
                value={this.state.newIPAddress}
                data-test="newIP"
                onChangeText={val => this.updateIpState(val)}
                keyboardType="numeric"
            /><ButtonWithBackground
                color="#29aaf4"
                onPress={this.submitIP}
                data-test="newIPAddress"

                style={styles.changeIPButton}
                disabled={this.state.newIPAddress === this.props.ip} >
                    SUBMIT
            </ButtonWithBackground></View>)
        }
        let confirmPaswordControl = null;
        if (!this.props.loginMode) {
            confirmPasswordControl = (
                <View data-test="confirmPasswordControl"
                    style={
                        this.state.viewMode === "portrait"
                            ? styles.portraitPasswordWrapper
                            : styles.landscapePasswordWrapper
                    }
                >
                    <DefaultInput
                        placeholder="Confirm Password"
                        data-test="confirmPassword"
                        style={styles.input}
                        value={this.state.controls.confirmPassword.value}
                        onChangeText={val => this.updateInputState("confirmPassword", val)}
                        valid={this.state.controls.confirmPassword.valid}
                        touched={this.state.controls.confirmPassword.touched}
                        secureTextEntry
                    />
                </View>
            );
        }
        return (
            <View style={styles.container} data-test="containerComp"            
            >
                {changeIPAddress}
                {newIPAddress}
                {headingText}
                <ButtonWithBackground
                    color="#29aaf4"
                    data-test="authModeSwitch"
                    onPress={this.switchAuthModeHandler}
                >
                    Switch to {this.props.loginMode ? "Sign Up" : "Login"}
                </ButtonWithBackground>
                <View style={styles.inputContainer}>
                    <DefaultInput
                        placeholder="Your E-Mail Address"
                        style={styles.input}
                        value={this.state.controls.email.value}
                        onChangeText={val => this.updateInputState("email", val)}
                        valid={this.state.controls.email.valid}
                        data-test="emailComp"
                        touched={this.state.controls.email.touched}
                    />
                    <View
                        style={
                            this.state.viewMode === "portrait" ||
                                this.props.loginMode
                                ? styles.portraitPasswordContainer
                                : styles.landscapePasswordContainer
                        }
                    >
                        <View
                            style={
                                this.state.viewMode === "portrait" ||
                                    this.props.loginMode
                                    ? styles.portraitPasswordWrapper
                                    : styles.landscapePasswordWrapper
                            }
                        >
                            <DefaultInput
                                placeholder="Password"
                                style={styles.input}
                                data-test="passwordComp"
                                value={this.state.controls.password.value}
                                onChangeText={val => this.updateInputState("password", val)}
                                valid={this.state.controls.password.valid}
                                secureTextEntry
                                touched={this.state.controls.password.touched}
                            />
                        </View>
                        {confirmPasswordControl}
                    </View>
                </View>
                <ButtonWithBackground
                    color="#29aaf4"
                    onPress={this.onButtonPress}
                    data-test="loginup"
                // disabled={
                //     (!this.state.controls.confirmPassword.valid &&
                //         !this.props.loginMode) ||
                //     !this.state.controls.email.valid ||
                //     !this.state.controls.password.valid
                // }
                >
                    {this.props.loginMode ? "Login" : "Sign Up"}
                </ButtonWithBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    changeIP: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "flex-start"
    },
    changeIPInput: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        width: "55%",
        margin: 10
    },
    changeIPButton: {
        width: "40%",
        margin: 10
    },
    changeIPAddressButton: {
        flex: 1,
        position: 'absolute',
        alignItems: "flex-start"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
});




// Get actions to handle store data
const mapDispatchToProps = (dispatch) => {
    return {
        authSignUp: (email, password) => dispatch(authActions.signUp(email, password)),
        authLogin: (email, password) => dispatch(authActions.login(email, password)),
        switchMode: () => dispatch(authActions.switchMode()),
        updateIP: (ip) => dispatch(ipActions.updateIP(ip)),
        changeMode: () => dispatch(ipActions.changeMode())
    };
}

const mapStateToProps = (state) => {
    return {
        loginMode: state.auth.loginMode,
        token: state.auth.token,
        mode: state.ip.changeMode,
        ip: state.ip.ip,
        newIP: state.ip.newIP,
        userId: state.auth.userId
    };
}

// Wire it all up and export
export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

