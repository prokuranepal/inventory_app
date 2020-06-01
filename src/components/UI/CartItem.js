import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Card from '../Component/Card'
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
const CartItem = props => {
    return (

        <View>
            <Card style={styles.cartItem}>
                <View style={styles.itemData}>
                    <FontAwesome5 name="capsules" size={24} color="black" />
                </View>
                <View>
                    <Text style={styles.mainText}>{props.title}</Text>
                    <Text style={styles.quantity}>Qty:{props.quantity} </Text>
                </View>
                <View style={styles.itemData}>
                    {/* <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text> */}
                    {props.deletable && (
                        <TouchableOpacity
                            onPress={props.onRemove}
                            style={styles.deleteButton}
                        >
                            <Entypo name="cross" size={24} color="black" size={23}
                                color="red" />
                        </TouchableOpacity>
                    )}
                </View>
            </Card>
        </View>

    );
};

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 16,
        paddingLeft: 10
    },
    mainText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    deleteButton: {
        marginLeft: 20
    }
});

export default CartItem;
