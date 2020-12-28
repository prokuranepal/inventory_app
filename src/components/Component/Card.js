import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * 
 * @returns {card} returns a component with styling
 * @param {props} props
 * @property {children} props.children any children component usually Text, Views to be wrapped as card
 */
const card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

export default card;
