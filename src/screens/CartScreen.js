import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Button,
    StyleSheet,
    Platform,
    ActivityIndicator
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/Component/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors'
import CartItem from '../components/UI/CartItem';
import * as cartActions from '../store/actions/cart';
import * as ordersActions from '../store/actions/orders';
import CustomButtom from '../components/Component/CustomButton';


const CartScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
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
        // setIsLoading(true);
        dispatch(ordersActions.addOrder(cartItems));
        // setIsLoading(false);
        props.navigation.navigate('Order')
    };


    const sendAddHandler = () => {
        props.navigation.navigate('Add')
    };
    return (
        <View style={styles.screen}>

            {cartItems.length !== 0 ?
                <>
                    <Text style={styles.title}> LIST OF MEDICINES</Text>
                    <FlatList
                        data={cartItems}
                        data-test="flatListComp"
                        keyExtractor={item => item.itemId}
                        renderItem={itemData => (
                            <CartItem
                                quantity={itemData.item.quantity}
                                title={itemData.item.itemTitle}
                                deletable data-test="cartItem"
                                onRemove={() => {
                                    dispatch(cartActions.removeFromCart(itemData.item.itemId));
                                }}
                            />
                        )}
                    /></> : <Text style={styles.title}  data-test="emptyComp">No Medicine in cart</Text>}

            <View style={styles.buttonContainer}>
                {/* {isLoading ? (
                    <ActivityIndicator size="small" color={Colors.primary} />
                ) : ( */}
                <Button
                    color="#3aae6d"
                    title="Order Now"
                    disabled={cartItems.length === 0}
                    data-test="sendButton"
                    onPress={sendOrderHandler} />
                {/* )} */}
            </View>
            <CustomButtom style= {styles.buttonContainer} 
                          title="ADD ITEM"
                          color="#3aae6d"
                          data-test="customSendButton"
                          pressHandler={sendAddHandler} />
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
                <Item title="Menu" iconName="ios-menu" data-test="navToggle" onPress={() => {
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
        marginBottom: 20,
        
    }
});



export default CartScreen;