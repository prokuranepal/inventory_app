import React, { useCallback, useReducer, useEffect } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Platform,
    Text,
    Button,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';
import * as cardActions from '../store/actions/cart';
import { Ionicons } from '@expo/vector-icons';
import Input from '../components/UI/Input';
import Colors from '../constants/Colors';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };

        return {
            inputValues: updatedValues
        };
    }
    return state;
};


const AddScreen = props => {

    const dispatch = useDispatch();
    // const categories = [{
    //     label: "Pain killer",
    //     value: "Pain killer",
    // }, {
    //     label: "Vitamin",
    //     value: 'Vitamin',
    // }, {
    //     label: "Antibiotic",
    //     value: 'Antibiotic',
    // },
    // {
    //     label: "General",
    //     value: 'General',
    // }];
    const categories = [{
        label: "Sinex",
        value: "Sinex",
    }, {
        label: "Antacids",
        value: 'Antacids',
    }, {
        label: "Antibiotics",
        value: 'Antibiotics',
    },
    {
        label: "Paracetamol",
        value: 'Paracetamol',
    },
    {
        label: "Electrobion",
        value: 'Electrobion',
    },
    {
        label: 'Digene',
        value: 'Digene',
    },
    {
        label: 'Masks',
        value: 'Masks',
    },
    {
        label: 'Neurobion',
        value: 'Neurobion',
    }];
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            title: '',
            quantity: '',
        }
    });
    const selectedItem = useSelector(state =>
        state.items.items
    );

    const submitHandler = () => {

        const selected = selectedItem.find(item => item.title === formState.inputValues.title)
        dispatch(cardActions.addToCart(selected, +formState.inputValues.quantity));
        props.navigation.pop();
    }

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue) => {
            let input = inputValue;
            let identifier = inputIdentifier
            if (['Sinex', 'Antacids', 'Antibiotics', 'Electrobion', 'Paracetamol',
                'Digene', 'Neurobion', 'Masks'].indexOf(inputIdentifier) >= 0) {
                input = inputIdentifier;
                identifier = "title";
            }
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: input,
                input: identifier
            });
        }, [dispatchFormState]);

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={20}
        >
            <ScrollView>
                <View style={styles.form}>
                    {/* <Input
                        id="title"
                        label="Medicine Name"
                        errorText="Please enter a valid medicine name"
                        keyboardType="default"
                        autoCapitalize="sentences"
                        autoCorrect
                        onInputChange={inputChangeHandler}
                        returnKeyType="next"
                        initialValue=''
                        required
                    /> */}

                    <Text style={styles.label}>{"Medicine Type"}</Text>
                    <RNPickerSelect
                        onValueChange={inputChangeHandler}
                        useNativeAndroidPickerStyle={false}
                        placeholder={{
                            label: 'Select a Medicine Type',
                            value: '',
                            color: '#9EA0A4',
                        }}
                        Icon={() => {
                            return <Ionicons name="md-arrow-down" size={24} color="gray" />;
                        }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 18,
                                right: 15
                            }, placeholder: {
                                color: 'black',
                                fontSize: 14,
                                fontWeight: 'bold',
                            },
                        }}
                        items={categories}
                    />

                    <Input
                        id="quantity"
                        label="Quantity in pcs"
                        errorText="Please enter correct quantity"
                        keyboardType="numeric"
                        onInputChange={inputChangeHandler}
                        returnKeyType="next"
                        initialValue=''
                        required
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity >
                        <Button title="Add" color={Colors.accent} onPress={submitHandler} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
};

AddScreen.navigationOptions = navData => {

    return {
        headerTitle: 'Add Item in Cart',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans'
        }
    };
};

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    centered: {
        flex: 1,
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginTop: 25,
        fontSize: 16
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 8,

        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        marginTop: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default AddScreen;