import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/UI/CategroyGridTile';


const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        console.log("category", itemData.item.icon)
        return (

            <CategoryGridTile title={itemData.item.title}
                iconValue={itemData.item.icon}
                color={itemData.item.color}
                onSelect={() => {

                }} />

        )
    }

    return (

        <FlatList
            keyExtractor={(item, index) => {
                return item.id
            }}
            data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );



};

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: "Inventory Management",
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans'
        },

    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,

})

export default CategoriesScreen;