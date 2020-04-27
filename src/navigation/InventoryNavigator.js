import React from 'react';
import Platform from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import ItemListScreen from '../screens/ItemListScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import EditItemScreen from '../screens/EditItemScreen';
import ManageItemScreen from '../screens/ManageItemScreen';
import Colors from '../constants/Colors';


const defaultData = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? '' : Colors.primaryColor
    },
    headerTintColor: Platform.OS === "android" ? Colors.primaryColor : 'white'
}

const InventoryNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryItems: ItemListScreen, //same as others, long form
    ItemDetail: ItemDetailScreen,
    EditItem: EditItemScreen,
    ManageItem: ManageItemScreen
}, {
    mode: 'card',
    defaultNavigationOptions: defaultData

},

);

export default createAppContainer(InventoryNavigator);