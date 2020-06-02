import React from 'react';
import {
    View,
    Text,
    FlatList,
    Button,
    StyleSheet,
    Platform,
} from 'react-native';
import HeaderButton from '../components/Component/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors'
import { CONTACTS } from '../data/dummy-data';
import Card from '../components/Component/Card';
import { Linking } from 'react-native'
const SupplierContactScreen = props => {

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
        <View >


            <FlatList
                data={CONTACTS}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <Card style={styles.orderItem}>
                        <View style={styles.summary}>
                            <View>

                                <Text style={styles.name}> Supplier Name:{itemData.item.name}</Text>
                                <Text style={styles.number}>Phone Number: {itemData.item.phoneNumber}</Text>
                                <Text>{itemData.item.address}</Text>
                            </View>
                            <Button
                                color={Colors.primary}
                                title="Call"
                                onPress={dialCall}
                            />
                        </View>
                    </Card>
                )}
            />

        </View>
    );
};


SupplierContactScreen.navigationOptions = navData => {
    return {
        headerTitle: "Supplier Contact",
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

    orderItem: {
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    name: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    number: {
        fontSize: 16,
        fontFamily: 'open-sans',
        color: '#888'
    },

})

export default SupplierContactScreen;