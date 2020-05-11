import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


const ManageItem = props => {
    let sn = props.serialNo
    // let sn = props.serialNo.replace('i', '');
    let styler = sn % 2 === 0 ? styles.mealItem : styles.mealItem2;

    return (
        <View style={styler}>
            <TouchableOpacity onPress={props.onSelectItem} >

                <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                    <Text> {sn}</Text>
                    <Text numberOfLines={1}>{props.title}</Text>
                    <Text> {props.quantity}pcs</Text>
                    <Text> {props.company.toUpperCase()}</Text>
                    <Text> Rs. {props.price}/PC</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 10,
        paddingHorizontal: 12,
    }
    , title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        // color: 'white',
        textAlign: 'center'
    },
    mealItem: {
        width: '100%',
        height: 50,
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center'

    }, mealItem2: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center'
    },
    mealRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,

    mealDetails: {
        // height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

})

export default ManageItem;