import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
/**
 * 
 * @returns {HeaderButton} returns a header button component with custom styling
 * @param {props} props for react navigation header button
 * 
 */
const CustomHeaderButton = props => {
    return <HeaderButton {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor} />

}

export default CustomHeaderButton;