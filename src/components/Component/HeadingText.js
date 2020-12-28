import React from "react";
import { Text, StyleSheet } from "react-native";

/**
 * 
 * @returns {Text} returns a text Component with heading styling
 * @param {props} style for overriding style
 * @property {children} props.children any children component usually Text to be wrapped within text component
 * 
 */
const headingText = props => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default headingText;