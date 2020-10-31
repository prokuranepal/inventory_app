import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    Text,
    Platform,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/Component/HeaderButton';
import OrderItem from '../components/UI/OrderItem';
// import * as ordersActions from '../store/actions/orders';
import Colors from '../constants/Colors';

const OrderListScreen = props => {
    // const [isLoading, setIsLoading] = useState(false);

    const orders = useSelector(state => state.orders.orders);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     setIsLoading(true);
    //     dispatch(ordersActions.fetchOrders()).then(() => {
    //         setIsLoading(false);
    //     });
    // }, [dispatch]);

    // if (isLoading) {
    //     return (
    //         <View style={styles.centered}>
    //             <ActivityIndicator size="large" color={Colors.primary} />
    //         </View>
    //     );
    // }

    if (orders.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No order found, maybe start ordering some medicines?</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={orders}
            data-test="flatListComp"
            keyExtractor={(item => item.id)}
            renderItem={itemData => (
                <OrderItem
                    data-test="itemComp"
                    // amount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                    items={itemData.item.items}
                />
            )}
        />
    );
};

OrderListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Orders',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    data-test="navToggle"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default OrderListScreen;
