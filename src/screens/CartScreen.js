import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Button,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/Component/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors'
import CartItem from '../components/UI/CartItem';
import Card from '../components/Component/Card';
import * as cartActions from '../store/actions/cart';


const CartScreen = props => {

    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                itemId: key,
                itemTitle: state.cart.items[key].itemTitle,
                itemPrice: state.cart.items[key].itemPrice,
                quantity: state.cart.items[key].quantity,

            });
        }
        return transformedCartItems.sort((a, b) =>
            a.quantity > b.quantity ? -1 : 1
        );
    });

    const dispatch = useDispatch();
    const sendOrderHandler = () => {
        console.log("order")
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>ALL LIST OF ITEMS</Text>
            <View>
                <FlatList
                    data={cartItems}
                    keyExtractor={item => item.itemId}
                    renderItem={itemData => (
                        <CartItem
                            quantity={itemData.item.quantity}
                            title={itemData.item.itemTitle}
                            deletable
                            onRemove={() => {
                                dispatch(cartActions.removeFromCart(itemData.item.itemId));
                            }}
                        />
                    )}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    color={Colors.accent}
                    title="Order Now"
                    disabled={cartItems.length === 0}
                    onPress={sendOrderHandler}

                />

            </View>


        </View>
    );
};

CartScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your Cart",
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

    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    },
    title: {
        fontSize: 20,

    },
    buttonContainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',


    }
});



export default CartScreen;