import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import ItemListScreen from '../screens/ItemListScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import React from 'react';
import Platform from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AuthScreen from '../screens/AuthScreen';
import EditItemScreen from '../screens/EditItemScreen';

import ManageItemScreen from '../screens/ManageItemScreen';
import LogsScreen from '../screens/LogsScreen';
import TransportScreen from '../screens/TransportScreen';

const defaultData = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? '' : Colors.primaryColor
    },
    headerTintColor: Platform.OS === "android" ? Colors.primaryColor : 'white'
}

const ItemsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryItems: ItemListScreen, //same as others, long form
    ItemDetail: ItemDetailScreen,
    AddItem: EditItemScreen,
    ManageInventory: ManageItemScreen,
    Transport: TransportScreen,
    Logs: LogsScreen
}, {
    mode: 'card',
    defaultNavigationOptions: defaultData

},

);

const ShowAllNavigator = createStackNavigator({
    ItemDetail: ItemListScreen,
}, {
    mode: 'card',
    defaultNavigationOptions: defaultData

})

const tabScreenConfig = {
    Items: {
        screen: ItemsNavigator, navigationOptions: {
            tabBarLabel: 'Inventory',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-basket' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    ItemDetails: {
        screen: ShowAllNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    }
}

const ItemsTabNavigator = Platform.OS !== 'android' ?
    createMaterialBottomTabNavigator(
        tabScreenConfig,
        {
            activeColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        }) :
    createBottomTabNavigator(
        tabScreenConfig,
        {
            tabBarOptions: {
                activeTintColor: Colors.accentColor
            }
        });
const SettingsNavigator = createStackNavigator({
    Settings: SettingsScreen
},
    {
        defaultNavigationOptions: defaultData

    }
)

const MainNavigator = createDrawerNavigator({

    TabsNav: ItemsTabNavigator,
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