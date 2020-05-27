import React from 'react';
import { View, Text, Platform } from 'react-native';
import HeaderButton from '../components/Component/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors'

const SettingsScreen = props => {

    return (
        <View>
            <Text>
                Settings Screen
            </Text>
        </View>
    );
};



SettingsScreen.navigationOptions = navData => {
    return {
        headerTitle: "Setting",
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navData.navigation.toggleDrawer()
                }} />
            </HeaderButtons>
        )
    }
}

export default SettingsScreen;