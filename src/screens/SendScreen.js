import React from 'react';
import { View, Text, StyleSheet, Platform,  KeyboardAvoidingView, ScrollView} from 'react-native';
import HeaderButton from '../components/Component/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import Input from '../components/UI/Input';
import navigationOptions from '../utility/navigationOptions';
import RNPickerSelect from 'react-native-picker-select';


const inputChangeHandler=()=>{}

const SendScreen = props => {
    const categories = [{
        label: "Dharan",
        value: "Dharan",
      }, {
        label: "Biratnagar",
        value: 'Biratnagar',
      }, {
        label: "Ramche",
        value: 'Ramche',
      },
      {
        label: "Nangi",
        value: 'Nangi',
      }];
    return (
        <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={20}
    >
      <ScrollView>
        <View style={styles.form}>
          
          <Text style={styles.label}>{"Destination"}</Text>


          <RNPickerSelect
            onValueChange={inputChangeHandler}
            useNativeAndroidPickerStyle={false}
            placeholder={{
              label: 'Select Destination',
              value: '',
              color: '#9EA0A4',
            }}
            Icon={() => {
              return <Ionicons name="md-arrow-down" size={24} color="green" />;
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 18,
                right: 15
              }, placeholder: {
                color: 'black',
                fontSize: 14,
                fontWeight: 'bold',
              },
            }}

            items={categories}
          />

        </View>
        <View>
        <Text style={styles.label}>{"Items to Send"}</Text>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SendScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: 'Send',
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
      fontFamily: 'open-sans'
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    )
};

}

const styles = StyleSheet.create({
    form: {
      margin: 20
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    label: {
      fontFamily: 'open-sans-bold',
      marginTop: 25,
      fontSize: 16
    },
  });
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      marginTop: 8,
  
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      marginTop: 8,
      marginBottom: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

export default SendScreen;