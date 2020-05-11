
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import ItemList from '../components/UI/ItemList';
import { useSelector, Usedispatch, useEffect } from 'react-redux';
import DefaultText from '../components/Component/DefaultText';


const ItemListScreen = props => {



    const catTitle = props.navigation.getParam('title');

    let availableItems = null;
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
            console.log("available items", availableItems)
            break;
        default:
            availableItems = useSelector(state => state.items.items)

    }


    console.log("type", availableItems)
    return (

        <ItemList
            attentionMessage={attentionMsg}
            listData={availableItems}
            navigation={props.navigation} />
    );
};

ItemListScreen.navigationOptions = navigationData => {
    return {
        headerTitle: "Inventory"
    }
};




export default ItemListScreen;