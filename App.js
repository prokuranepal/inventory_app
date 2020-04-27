import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import InventoryNavigator from './src/navigation/InventoryNavigator';
import { enableScreens } from 'react-native-screens';
enableScreens();



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
    <InventoryNavigator />
  );
}
