import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import ItemsNavigator from './src/navigation/InventoryNavigator';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import itemsReducer from './src/store/reducers/items';
import { Provider } from 'react-redux';
enableScreens();

const rootReducer = combineReducers({
  items: itemsReducer
})

const store = createStore(rootReducer);

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  console.log(Platform.OS === 'android')
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
