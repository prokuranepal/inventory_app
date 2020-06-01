import React from 'react';
import { View, Text, Platform, Button, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderButton from '../components/Component/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors'
import { Linking } from 'react-native'
import Communications from 'react-native-communications';
const OrderScreen = props => {
    const dialCall = () => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${}';
        }
        else {
            phoneNumber = 'telprompt:${}';
        }

        Linking.openURL(phoneNumber);
    };



    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Send Via</Text>
            <View style={styles.buttonContainer}>
                <Button title="Call" onPress={dialCall} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="SMS" onPress={() => Communications.text('', '')} />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Internet" />
            </View>
        </View>
    );
};

OrderScreen.navigationOptions = navData => {
    return {
        headerTitle: "Order",
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

const styles = StyleSheet.create({
    screen: {
        margin: 20,
        flex: 1
    },
    title: {
        fontSize: 20,

    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    }
})
export default OrderScreen;


