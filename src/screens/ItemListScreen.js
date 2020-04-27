
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import ItemList from '../components/UI/ItemList';
import { useSelector } from 'react-redux';


const ItemListScreen = props => {

    const catTitle = props.navigation.getParam('title');
    let availableItems = null;
    if (catTitle === "Attention") {
        availableItems = useSelector(state => state.items.attentionItems)

    }
    else {
        availableItems = useSelector(state => state.items.items)

    }

    return (
        <ItemList
            listData={availableItems}
            navigation={props.navigation} />
    );
};

ItemListScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    }
};




export default ItemListScreen;