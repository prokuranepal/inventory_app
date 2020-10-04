import React, { useState } from 'react';
// import { StyleSheet, Text, View, Platform } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import InventoryNavigator from './src/navigation/InventoryNavigator';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import itemsReducer from './src/store/reducers/items';
import authReducer from './src/store/reducers/auth';
import cartReducer from './src/store/reducers/cart';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ipReducer from './src/store/reducers/ip';
import orderReducer from './src/store/reducers/orders';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer, composeWithDevTools());
enableScreens();

const rootReducer = combineReducers({
  items: itemsReducer,
  auth: authReducer,
  ip: ipReducer,
  cart: cartReducer,
  orders: orderReducer
})

// const store = createStore(rootReducer, composeWithDevTools());
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}



/**
 * Return the ratio of the inline text length of the links in an element to
 * the inline text length of the entire element.
 *
 */
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />)
  }
  return (
    <Provider store={store}><InventoryNavigator /></Provider>
  );
}
