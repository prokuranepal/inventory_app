import React from 'react';
import Platform from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import ItemListScreen from '../screens/ItemListScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import EditItemScreen from '../screens/EditItemScreen';
import ManageItemScreen from '../screens/ManageItemScreen';
import AuthScreen from '../screens/AuthScreen';
import SettingsSreen from '../screens/SettingsScreen';

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
const SettingsNavigator = createStackNavigator({
    Settings: SettingsSreen
},
    {
        defaultNavigationOptions: defaultData

    }
)


const MainNavigator = createDrawerNavigator({

    Categories: InventoryNavigator,
    Settings: SettingsNavigator
},
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
)

const loginNavigator = createSwitchNavigator({
    Login: AuthScreen,
    Tabs: MainNavigator
}, {
    defaultNavigationOptions: defaultData
}
)

export default createAppContainer(loginNavigator);