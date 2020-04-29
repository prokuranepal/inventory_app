import React, { useEffect, useCallback, useReducer } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import TestInput from '../Component/testInput';

const INPUT_CHANGE = 'INPUT_CHANGE';


const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: `${action.value}`,
            };

        default:
            return state;
    }
};

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
    });

    const { onInputChange, id } = props;

    useEffect(() => {

        onInputChange(id, inputState.value);

    }, [inputState, onInputChange, id]);
    const textChangeHandler = text => {
        dispatch({ type: INPUT_CHANGE, value: text });
    };

    const incrementHandler = (direction) => {
        if (direction === 'increase') {
            textChangeHandler(inputState.value / 1 + 1)
        }
        else {
            textChangeHandler(inputState.value / 1 - 1)
        }
    }

    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{props.label}</Text>
            <TestInput {...props} idName={id} value1={inputState.value} changeHandler={incrementHandler} textChangeHandler={textChangeHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginTop: 25,
        fontSize: 16
    },

    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        fontFamily: 'open-sans',
        color: 'red',
        fontSize: 13
    }
});

export default Input;