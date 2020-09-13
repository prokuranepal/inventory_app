import React from 'react';
import { View, Text, StyleSheet,Alert, Platform,  KeyboardAvoidingView, ScrollView, SafeAreaView} from 'react-native';
import HeaderButton from '../components/Component/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import Input from '../components/UI/Input';
import navigationOptions from '../utility/navigationOptions';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector } from 'react-redux';
import {useState, useEffect} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const inputChangeHandler=()=>{}

const SendScreen = props => {
  const [time, showTime] = useState(false);
  const [date, showDate] = useState(false);
  const[ newDate,setDate]= useState(new Date());
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , hour: "2-digit", minute: "2-digit"   };
  let d=new Date();
  console.log(d.toLocaleTimeString("en-us", options))
  const[ newTime,setTime]= useState(new Date());

  const requestedItems = useSelector(state => state.orders.requestedItems);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, []);

const submitHandler=()=>{
  
  Alert.alert(
    "Sending Confirmation",
    "Are you sure?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "YES", onPress: () => {
          try {
            props.navigation.navigate('Categories')
          } catch (err) {
            Alert.alert("ERROR", "Something went wrong cannot delete")
          }
        }
      }
    ],
    { cancelable: false }
  )
}
  
    // console.log(formState.formIsValid, editedItem, !!editedItem)
    // if (!formState.formIsValid) {
    //   Alert.alert('Wrong input!', 'Please check the errors in the form.', [
    //     { text: 'Okay' }
    //   ]);
    //   return;
    // }




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
      let total_price=0
      let requestedList=requestedItems.map((item,index)=>{
        total_price=total_price+item.price*item.quantity;
        return( 
        <View style={styles.requestedList} key={index} >
            <Text style={{flex:.2}}    >{index+1}</Text>
            <Text style={{flex:.4}} data-test={`itemTitle${index}`}>{item.title}</Text>
            <Text style={{flex:.2}} data-test={`itemPrice${index}`}>{item.price}</Text>
            <Text style={{flex:.2}} data-test={`itemQuantity${index}`}>{item.quantity}</Text>
        </View>)
      })
      let restrictor={height:"40%"}
      console.log(requestedList.length)
      let listHeight=requestedList.length>5?restrictor:"";
    
      const onDateChange = (event, selectedDate) => {
        showDate(false)
        if(selectedDate){
        const currentDate = new Date(selectedDate) ;
        console.log(event)
        setDate(currentDate);
        }
      };
      const onTimeChange = (event, selectedTime) => {
        showTime(false)
        if(selectedTime){
        const currentTime = new Date(selectedTime) ;
        console.log(selectedTime)
        setTime(currentTime);
        }
      };
    return (
        <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={20}
    >
      <ScrollView nestedScrollEnabled = {true}>
        <View style={styles.form}>
          <Text style={styles.label} data-test="labelDestination">{"Destination"}</Text>
          <RNPickerSelect
            onValueChange={inputChangeHandler}
            useNativeAndroidPickerStyle={false}
            data-test="destinationPicker"
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

       <Text style={styles.label}  data-test="labelItems">{"Items to Send"}</Text>
       <SafeAreaView style={{borderWidth:1,...listHeight}}>
       <View style={styles.requestedList}>
            <Text style={{flex:.2}}>{"SN"}</Text>
            <Text style={{flex:.4}}>{"Item"}</Text>
            <Text style={{flex:.2}}>{"Price"}</Text>
            <Text style={{flex:.2}}>{"Quantity"}</Text>
        </View>
         <ScrollView nestedScrollEnabled = {true}>
              {requestedList}
          </ScrollView> 
         </SafeAreaView >
         <View >
         <Text style={styles.label}  data-test="labelPrice">{"Total Price"}</Text>
         <View style={styles.calendar} >
            <Text style={{marginLeft:20, fontSize: 16, fontFamily: 'open-sans-bold',}} data-test="priceTotal">Rs. {total_price}</Text>
          </View>
          </View>
         <View >
         <Text style={styles.label}  data-test="labelDate">{"Scheduled Date"}</Text>
         <TouchableOpacity onPress={()=>showDate(true)} data-test="touchDate" >
         <View style={styles.calendar} >
            <Text style={{marginLeft:20,   fontSize: 16, fontFamily: 'open-sans-bold',}}>{ newDate.toLocaleDateString("en-US", options)}</Text>
          </View>
          </TouchableOpacity>
            {date && (<DateTimePicker
            data-test="datePicker"
          testID="datePicker"
          value={new Date()}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onDateChange}
            />)}
        </View>
        <View >
         <Text style={styles.label}  data-test="labelTime">{"Scheduled Time"}</Text>
         <TouchableOpacity onPress={()=>showDate(true)} data-test="touchTime">
         <View style={styles.calendar} >
            <Text style={{marginLeft:20,   fontSize: 16, fontFamily: 'open-sans-bold',}}>{ newTime.toLocaleTimeString("en-US", options)}</Text>
          </View>
          </TouchableOpacity>
            {time && (<DateTimePicker
            data-test="timePicker"
          testID="timePicker"
          value={()=>new Date()}
          mode={"dare"}
          is24Hour={true}
          display="default"
          onChange={onTimeChange}
            />
            )}
        </View>
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
          onPress={()=>submitFn} data-test="goBack"
        />
      </HeaderButtons>
    )
};

}

const styles = StyleSheet.create({
    form: {
      flex:1,
      flexDirection:'column',
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
    calendar: {
      borderWidth:1,
      borderRadius:10,
      padding: 8,
   

    },
    requestedList:{
      flex:1,
      flexDirection:"row",
      margin:4,
      padding:4,
      justifyContent:'space-around',
    }
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