import React from 'react';
import MainButton from './MainButton';
import { Ionicons } from "@expo/vector-icons";
import { TextInput, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
const TestInput = (props) => {
    let textInput = <TextInput
    data-test="container1"
        style={styles.input}
        {...props}
        value={props.value1}
        onChangeText={props.textChangeHandler}
    // onBlur={lostFocusHandler}
    />;
    if (props.idName === 'quantity') {
        textInput = (
            <View style={styles.quantityContainer} data-test="container">
                <View style={styles.quantity}>
                    <TextInput
                        {...props}
                        style={styles.input}
                        value={props.value1}
                        onChangeText={props.textChangeHandler}
                        data-test="textComp"
                    // onBlur={lostFocusHandler}
                    />
                </View>
                <View style={styles.quantityButtons}>
                    <MainButton onPress={props.changeHandler.bind(this, 'increase')} data-test="increaseComp" >
                        <Ionicons name='ios-add' size={20} color="black" />
                    </MainButton>
                    <MainButton onPress={props.changeHandler.bind(this, 'decrease')} data-test="decreaseComp">
                        <Ionicons name='ios-remove' size={20} color="black" />
                    </MainButton>
                </View>
            </View>
        )
    }
    return (
        <View>
            {textInput}
        </View>
    )
}



const styles = StyleSheet.create({
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8,
        width: "100%"
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 3,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,

    },
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        fontFamily: 'open-sans',
        color: 'red',
        fontSize: 13
    },
    quantityContainer: {
        flex: 1,

        flexDirection: 'row',
        width: '100%',
    },
    quantity: {
        flex: 0.7,
        justifyContent: 'center',

    },
    quantityButtons: {
        flex: 0.3,
        alignItems: "flex-end",
        justifyContent: 'flex-end'
    }
});

export default TestInput;
