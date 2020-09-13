import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


const ManageItem = props => {
    let sn = props.serialNo
    // let sn = props.serialNo.replace('i', '');
    let styler = sn % 2 === 0 ? styles.mealItem : styles.mealItem2;

    return (
        <View style={styler}>
            <TouchableOpacity onPress={props.onSelectItem} data-test="touch">

                <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                    <Text style={{flex:2}} > {sn}</Text>
                    <Text style={{flex:4}} numberOfLines={1}>{props.title}</Text>
                    <Text style={{flex:4}}> {props.quantity}pcs</Text>
                    <Text style={{flex:4}}> {props.company}</Text>
                    <Text style={{flex:3}}> Rs. {props.price}/PC</Text>
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
        backgroundColor: '#9cd6b6',
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