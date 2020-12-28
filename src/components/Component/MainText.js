import React from 'react';
import { Text, StyleSheet } from 'react-native';

/**
 * 
 * @returns {Text} returns a text Component with custom styling
 * @property {children} props.children any children component usually Text to be wrapped within text component
 * 
 */
const mainText = props => (
    <Text style={styles.mainText}>{props.children}</Text>
);

const styles = StyleSheet.create({
    mainText: {
        color: "#29aaf4",
        backgroundColor: "transparent"
    }
});

export default mainText;