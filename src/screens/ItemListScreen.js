
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
    if (catTitle === "Attention") {
        availableItems = useSelector(state => state.items.attentionItems)
        attentionMsg = <DefaultText style={{ color: 'red', marginBottom: 10, fontSize: 16, fontFamily: 'open-sans-bold' }}>Items with quantity below 30 are:</DefaultText>
    }
    else {
        availableItems = useSelector(state => state.items.items)

    }

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