import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import InventoryNavigator from './src/navigation/InventoryNavigator';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import itemsReducer from './src/store/reducers/items';
import authReducer from './src/store/reducers/auth';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
enableScreens();

const rootReducer = combineReducers({
  items: itemsReducer,
  auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

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
