

import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    ImageBackground,
    Dimensions
} from "react-native";

import DefaultInput from "../components/Component/DefaultInput";
import HeadingText from "../components/Component/HeadingText";
import MainText from "../components/Component/MainText";
import ButtonWithBackground from "../components/Component/ButtonWIthBackground";

class Authentication extends Component {
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        authMode: "login",
        controls: {
            email: {
                value: "",
                valid: true,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: true,
                validationRules: {
                    minLength: 6
                },
                touched: false
            },

        }
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
    }



    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    };



    updateInputState = (key, value) => {

        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        touched: true
                    }
                }
            };
        });
    };

    render() {
        let headingText = null;
        let confirmPasswordControl = null;

        if (this.state.viewMode === "portrait" && this.state.authMode == "login") {
            headingText = (
                <MainText>
                    <HeadingText>Please Login </HeadingText>
                </MainText>
            );
        }

        return (
            <View style={styles.container}>
                {headingText}
                <View style={styles.inputContainer}>
                    <DefaultInput
                        placeholder="Your E-Mail Address"
                        style={styles.input}
                        value={this.state.controls.email.value}
                        onChangeText={val => this.updateInputState("email", val)}
                        valid={this.state.controls.email.valid}
                        touched={this.state.controls.email.touched}
                    />
                    <View
                        style={
                            this.state.viewMode === "portrait" ||
                                this.state.authMode === "login"
                                ? styles.portraitPasswordContainer
                                : styles.landscapePasswordContainer
                        }
                    >
                        <View
                            style={
                                this.state.viewMode === "portrait" ||
                                    this.state.authMode === "login"
                                    ? styles.portraitPasswordWrapper
                                    : styles.landscapePasswordWrapper
                            }
                        >
                            <DefaultInput
                                placeholder="Password"
                                style={styles.input}
                                value={this.state.controls.password.value}
                                onChangeText={val => this.updateInputState("password", val)}
                                valid={this.state.controls.password.valid}
                                touched={this.state.controls.password.touched}
                            />
                        </View>
                    </View>
                </View>
                <ButtonWithBackground
                    color="#29aaf4"
                    onPress={() => {
                        this.props.navigation.navigate({
                            routeName: 'Tabs'
                        })
                    }}
                >
                    LOGIN
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



export default Authentication;