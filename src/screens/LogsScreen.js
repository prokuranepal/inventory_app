import React from 'react';
import { View, Text, Platform } from 'react-native';
import HeaderButton from '../components/Component/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors'
import navigationOptions from '../utility/navigationOptions';


const LogsScreen = props => {

    return (
        <View>
            <Text>
                LogsScreen
            </Text>
        </View>
    );
};



LogsScreen.navigationOptions = navData => {
    return navigationOptions("Logs");
}


export default LogsScreen;