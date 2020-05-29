import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../constants/Colors'


const TransportScreen = props => {

    return (
        <View>
            <Text>
                TransportScreen
            </Text>
        </View>
    );
};

TransportScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Inventory',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans'
        },
    }
};


export default TransportScreen;