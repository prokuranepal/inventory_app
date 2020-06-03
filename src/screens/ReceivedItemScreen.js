import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    Text,
    Platform,
    ActivityIndicator,
    StyleSheet,
    Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import moment from 'moment';
import HeaderButton from '../components/Component/HeaderButton';
import OrderItem from '../components/UI/OrderItem';
import * as itemsActions from '../store/actions/items';
import Colors from '../constants/Colors';

const ReceivedItemScreen = props => {
    // const [isLoading, setIsLoading] = useState(false);
    const data = props.navigation.getParam('data');
    const date = new Date();
    receiveditems = [
        Order = {
            date: moment(date).format('MMMM Do YYYY, hh:mm'),
            // id: "i" + Math.random(),
            items: [
                {
                    itemid: "i" + Math.random(),
                    itemPrice: 20,
                    quantity: 5,
                    itemTitle: data
                },
            ]
        }]


    // console.log(receiveditems)
    const dispatch = useDispatch();
    const sendAddToInventoryHandler = () => {
        dispatch(
            itemsActions.addItems(
                data,
                'BGuys',
                5,
                'Paracetamol (acetaminophen) is a pain reliever and a fever reducer',
                30,
                'General'

            )
        );
        alert(`Items has been added to inventory`);
        props.navigation.goBack();
    }


    const sendCancelHandler = () => {
        props.navigation.navigate('Scanner')
    };

    if (receiveditems.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No received item  found.</Text>
            </View>
        );
    }

    return (
        <View style={styles.centered}>
            <Text style={styles.title}> Order Details</Text>
            <FlatList
                data={receiveditems}
                keyExtractor={(item => item.id)}
                renderItem={itemData => (
                    <OrderItem
                        // amount={itemData.item.totalAmount}
                        date={itemData.item.date}
                        items={itemData.item.items}
                    />
                )}
            />
            <View style={styles.buttonContainer}>
                {/* {isLoading ? (
                    <ActivityIndicator size="small" color={Colors.primary} />
                ) : ( */}
                <Button
                    color={Colors.accent}
                    title="ADD TO INVENTORY"
                    onPress={sendAddToInventoryHandler} />
                {/* )} */}
            </View>
            <View style={styles.buttonContainer}>
                <Button title="CANCEL" onPress={sendCancelHandler} />
            </View>
        </View>
    );
};

ReceivedItemScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Received Orders',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans'
        },
        // headerLeft: () => (
        //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //         <Item
        //             title="Menu"
        //             iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        //             onPress={() => {
        //                 navData.navigation.toggleDrawer();
        //             }}
        //         />
        //     </HeaderButtons>
        // )
    };
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        width: '100%'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    detailItems: {
        width: '100%'
    },
    title: {
        fontSize: 20,
    },

});

export default ReceivedItemScreen;
