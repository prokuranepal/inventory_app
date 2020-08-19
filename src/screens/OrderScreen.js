import React from 'react';
import { View, Text, Platform, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'
import { Linking } from 'react-native'
import Communications from 'react-native-communications';
import CustomButton from '../components/Component/CustomButton';
import navigationOptions from '../utility/navigationOptions';
const OrderScreen = props => {
    const dialCall = () => {
        let phoneNumber = '';    
        phoneNumber = Platform.OS==="android"?'tel:${}':'telprompt:${}';
        Linking.openURL(phoneNumber);
    };
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Send Via</Text>
            <CustomButton container_style ={styles.buttonContainer} 
                        title="Call" 
                        color="#3aae6d" 
                        pressHandler={dialCall} />
            <CustomButton container_style ={styles.buttonContainer} 
                        title="SMS" 
                        color="#3aae6d" 
                        pressHandler={() => Communications.text('', '')} />
             <CustomButton container_style ={styles.buttonContainer} 
                        title="Internet" 
                        color="#3aae6d"
                        pressHandler={()=>{}} 
                         />
        </View>
    );
};

OrderScreen.navigationOptions = navData => {
   return navigationOptions("Order")
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


