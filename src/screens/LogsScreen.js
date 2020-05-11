import React from 'react';
import { View, Text } from 'react-native';
import HeaderButton from '../components/Component/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors'


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
    return {
        headerTitle: "Logs",
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


export default LogsScreen;