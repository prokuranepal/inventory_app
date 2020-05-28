
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import ItemList from '../components/UI/ItemList';
import { useSelector, Usedispatch, useEffect } from 'react-redux';
import DefaultText from '../components/Component/DefaultText';
import Colors from '../constants/Colors';
const ItemListScreen = props => {

    const catTitle = props.navigation.getParam('title');

    let availableItems = null;
    // console.log("catTitle", catTitle)
    let attentionMsg = null;
    switch (catTitle) {
        case "Attention":
            availableItems = useSelector(state => state.items.attentionItems)
            attentionMsg = <DefaultText style={{ color: 'red', marginBottom: 10, fontSize: 16, fontFamily: 'open-sans-bold' }}>Items with quantity below 30 are:</DefaultText>

            break;
        case "Type":
            const title = props.navigation.getParam('value');
            const allItems = useSelector(state => state.items.items)
            availableItems = allItems.filter(item => {
                if (item.type === title) {
                    return true
                }
                return false;
            });

            break;
        case "all":
            availableItems = useSelector(state => state.items.items)
            break;
        default:
            break;
    }


    return (

        <ItemList
            attentionMessage={attentionMsg}
            listData={availableItems}
            navigation={props.navigation}
            catTitle={catTitle} />


    );
};

ItemListScreen.navigationOptions = navigationData => {
    const value = navigationData.navigation.getParam('value');
    return {
        headerTitle: value,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        }

    }
};




export default ItemListScreen;