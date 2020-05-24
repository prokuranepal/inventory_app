import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Platform } from 'react-native';
import { type } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/UI/CategroyGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/Component/HeaderButton';
import { useDispatch } from 'react-redux';
import * as itemsActions from '../store/actions/items';


const ItemCategoryScreen = props => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(itemsActions.setItems())
    // }, [])

    const renderGridItem = (itemData) => {
        return (

            <CategoryGridTile title={itemData.item.title}
                iconValue={itemData.item.icon}
                color={itemData.item.color}
                onSelect={() => {

                    let route = 'ItemList';
                    // switch (itemData.item.title) {
                    //     case "Manage":
                    //         route = "ManageInventory"
                    //         break;
                    //     case "Add Item":
                    //         route = "AddItem"
                    //         break;
                    //     case "Send/Req":
                    //         route = "Transport"
                    //         break;
                    //     case "Logs":
                    //         route = "Logs"
                    //         break;

                    //     default:
                    //         break;
                    // }
                    props.navigation.navigate
                        ({
                            routeName: route,
                            params: {
                                categoryId: itemData.item.id,

                                title: "Type",
                                value: itemData.item.title

                            }
                        })
                }} />

        )
    }
    return (
        <FlatList
            keyExtractor={(item, index) => {
                return index
            }}
            data={type} renderItem={renderGridItem} numColumns={2} />
    );



};

ItemCategoryScreen.navigationOptions = navData => {
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

export default ItemCategoryScreen;