import React from 'react';
import { View, Button } from 'react-native';
/**
 * 
 * @returns {button} returns a button with custom styling
 * @param {props} props overriding style, title, color, pressHandler
 */
const customButton =(props)=>(
    <View style={props.container_style}>
    <Button title={props.title?props.title:"Title"}  color={props.color} onPress={props.pressHandler} />
</View>
)

export default customButton;