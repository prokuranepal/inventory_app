import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import ItemListScreen from '../screens/ItemListScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Platform, SafeAreaView, Text, Image, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import AuthScreen from '../screens/AuthScreen';
import EditItemScreen from '../screens/EditItemScreen';
import ItemCategoryScreen from '../screens/ItemCategoryScreen';
import SplashScreen from '../screens/Splashscreen';
import OrderScreen from '../screens/OrderScreen';
import CartScreen from '../screens/CartScreen';
import ManageItemScreen from '../screens/ManageItemScreen';
import LogsScreen from '../screens/LogsScreen';
import AddItemScreen from '../screens/AddScreen';
import ScannerScreen from '../screens/ScannerScreen';
import OrderListScreen from '../screens/OrderListScreen';
import SupplierContactScreen from '../screens/SupplierContactScreen';
import ReceivedItemScreen from '../screens/ReceivedItemScreen';
import SendScreen from '../screens/SendScreen';
import { color } from 'react-native-reanimated';
const defaultData = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ItemsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryItems: ItemCategoryScreen,
    ItemList: ItemListScreen,
    ItemDetail: ItemDetailScreen,
    AddItem: EditItemScreen,
    ManageInventory: ManageItemScreen,
    Add: AddItemScreen,
    Logs: LogsScreen,
    Send: SendScreen,
    Order: OrderScreen,
    Scanner: ScannerScreen,
    ReceivedItemList: ReceivedItemScreen
}, {

    defaultNavigationOptions: defaultData

},
);

const ShowAllNavigator = createStackNavigator({
    ItemList: {
        screen: ItemListScreen,
        params: { title: "all" }
    },
}, {
    mode: 'card',
    defaultNavigationOptions: defaultData,

}
)

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
    ShowAll: {
        screen: ShowAllNavigator, navigationOptions: {
            tabBarLabel: 'Show All',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,
            params: { title: "all" }
        }
    }
}

const InventoryTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(
        tabScreenConfig,
        {
            navigationOptions: {
                drawerIcon: drawerConfig => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                        size={23}
                         color={Colors.primaryColor}
                    />
                )
            },
            activeColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.accentColor
            },

        }) :
    createBottomTabNavigator(
        tabScreenConfig,
        {
            navigationOptions: {
                drawerIcon: drawerConfig => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                        size={23}
                      color={Colors.primaryColor}
                    />
                )
            },
            tabBarOptions: {
                activeTintColor: Colors.accentColor
            },

        }, {
        defaultNavigationOptions: defaultData

    });

const createStackNav = (ScreenName, ScreenComponent)=>{
    return (createStackNavigator({
        [ScreenName]: ScreenComponent
    }, {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons
                    name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                    size={23}
                    // color={drawerConfig.tintColor}
                     color={Colors.primaryColor}
                />
            )
        }
    },
        {
            defaultNavigationOptions: defaultData
    
        }
    ))
}
const SettingsNavigator = createStackNav("Settings", SettingsScreen)




const SupplierContactScreenNavigator = createStackNavigator({
    SupplierContact: SupplierContactScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-contact' : 'ios-contact'}
                size={23}
                color={Colors.primaryColor}
            />
        )
    }
},
    {
        defaultNavigationOptions: defaultData

    }
)

const CartScreenNavigator = createStackNavigator({
    Cart: CartScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                size={23}
                color={Colors.primaryColor}
            />
        )
    }
},
    {
        defaultNavigationOptions: defaultData

    }
)

const OrderScreenListNavigator = createStackNav("OrderList", OrderListScreen)
// const logOUtNav = createStackNav("Logout", loginNavigator)

const MainNavigator = createDrawerNavigator({

    Inventory: InventoryTabNavigator,
    Cart: CartScreenNavigator,
    OrderList: OrderScreenListNavigator,
    SupplierContact: SupplierContactScreenNavigator,
    Settings: SettingsNavigator,
    // PLogout: AuthScreen


},
    {
        contentComponent: (props) => (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#2E8B57' }} >
                <View style={{ height: 200, marginBottom: 30, marginTop: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../assets/user.png')} style={{ width: 150, height: 150, opacity: 0.7 }} />
                    <Text style={{ marginTop: 10 }}>{props.navigation.getParam("userId")}</Text>
                </View>
                <ScrollView style={{backgroundColor:'#FFFFFF'}}>
                    <DrawerItems {...props} />
                </ScrollView>
            </SafeAreaView >
        )


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

    // Splash: SplashScreen,
    // Login: AuthScreen, //uncomment for authentication
    Tabs: MainNavigator
}, {
    defaultNavigationOptions: defaultData
}
)
export default createAppContainer(loginNavigator);