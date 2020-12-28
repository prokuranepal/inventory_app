import React from 'react';
import { Text, StyleSheet } from 'react-native';
/**
 * 
 * @returns {Text} returns text component with custom styling
 * @param {props} style for overriding default style
 * @property {children} props.children any children component usually Text, Views to be wrapped within text component
 * 
 */
const DefaultText = props => {
    return <Text style={{ ...styles.text, ...props.style }}> {props.children}</Text >;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        textAlign: 'justify'
    }
});
export default DefaultText;