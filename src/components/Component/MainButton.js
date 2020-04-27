import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#cccccc",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 25,
        margin: 3
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});
export default MainButton;



