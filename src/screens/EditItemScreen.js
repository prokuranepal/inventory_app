import React, { useEffect, useCallback, useReducer, useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Alert,
  Text,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/Component/HeaderButton';
import { useDispatch } from 'react-redux';
import * as itemsActions from '../store/actions/items';
import { Ionicons } from '@expo/vector-icons';

import Input from '../components/UI/Input';
import { Button } from 'react-native-paper';
import IconButton from '../components/Component/IconButton';
import Colors from '../constants/Colors';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };

    return {
      inputValues: updatedValues
    };
  }
  return state;
};


const EditItemScreen = props => {
  const dispatch = useDispatch();
  const itemId = props.navigation.getParam('itemId');
  const [isLoading, setIsLoading] = useState(false);
  // console.log("Editscreen ", itemId)
  let editedItem = null;
  let deleteComponent = null;
  const categories = [{
    label: "Pain killer",
    value: "Pain killer",
  }, {
    label: "Vitamin",
    value: 'Vitamin',
  }, {
    label: "Antibiotic",
    value: 'Antibiotic',
  },
  {
    label: "General",
    value: 'General',
  }];
  if (itemId) {
    editedItem = useSelector(state =>
      state.items.items.find(item => {
        // console.log("in edit screen", item._id, itemId)
        if (item._id === itemId) {
          return item;
        }
      }
      )
    )

    const deleteHandler = useCallback(() => {
      let action =
        itemsActions.deleteItem(
          itemId
        )

      Alert.alert(
        "DELETE ITEM",
        "Are you sure?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "OK", onPress: async () => {
              try {
                setIsLoading(true);
                await dispatch(action);
                setIsLoading(false);
                props.navigation.navigate('ManageInventory')
              } catch (err) {
                Alert.alert("ERROR", "Something went wrong cannot delete")
              }
            }
          }
        ],
        { cancelable: false }
      )



    }, [dispatch, setIsLoading]);

    deleteComponent = <IconButton
      iconValue="ios-trash"
      iconColor="#dd0000"
      onPressHandler={deleteHandler}
    // icon="delete"
    // color="red"
    // size={60}
    // onPress={deleteHandler}
    // style={{ flex: 1, width: "100%" }}
    />
  }

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedItem ? editedItem.title : '',
      company: editedItem ? editedItem.company : '',
      description: editedItem ? editedItem.description : '',
      quantity: editedItem ? editedItem.quantity : '',
      price: editedItem ? editedItem.price : '',
      type: 1,
    }
  });

  const submitHandler = useCallback(async () => {

    if (editedItem) {
      console.log("type", editedItem.type)
      setIsLoading(true);

      await dispatch(
        itemsActions.updateItem(
          itemId,
          formState.inputValues.title,
          formState.inputValues.company,
          +formState.inputValues.quantity,
          formState.inputValues.description,
          +formState.inputValues.price,
          editedItem.image,
          formState.inputValues.type
        )
      );
    } else {

      await dispatch(
        itemsActions.addItems(
          formState.inputValues.title,
          formState.inputValues.company,
          +formState.inputValues.quantity,
          formState.inputValues.description,
          +formState.inputValues.price,
          formState.inputValues.type

        )
      );
    }
    setIsLoading(false);
    props.navigation.goBack();


  }, [dispatch, formState, setIsLoading]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const inputChangeHandler = useCallback(

    (inputIdentifier, inputValue) => {
      let input = inputValue;
      let identifier = inputIdentifier
      console.log("input", input, inputIdentifier)

      if (['General', 'Antibiotic', "Vitamin", "Pain killer"].indexOf(inputIdentifier) >= 0) {
        input = inputIdentifier;
        identifier = "type";
      }
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: input,
        input: identifier
      });
    },
    [dispatchFormState]
  );
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={20}
    >
      <ScrollView>
        <View style={styles.form}>
          <Input
            id="title"
            label="Item/Medicine Name"
            errorText="Please enter a valid title!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            onInputChange={inputChangeHandler}
            returnKeyType="next"
            initialValue={editedItem ? editedItem.title : ''}
            required
          />
          <Input
            id="company"
            label="Manufactured By"
            errorText="Please enter a valid Company Name!"
            keyboardType="default"
            autoCapitalize="sentences"
            onInputChange={inputChangeHandler}
            autoCorrect
            initialValue={editedItem ? editedItem.company : ''}
            returnKeyType="next"
            required
          />
          <Text style={styles.label}>{"Category"}</Text>

          <RNPickerSelect
            onValueChange={inputChangeHandler}
            useNativeAndroidPickerStyle={false}
            placeholder={{
              label: editedItem ? editedItem.type : 'Select a Category',
              value: editedItem ? editedItem.type : '',
              color: '#9EA0A4',
            }}
            Icon={() => {
              return <Ionicons name="md-arrow-down" size={24} color="gray" />;
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

            items={
              categories}
          />
          <Input
            id="quantity"
            label="Quantity in pcs"
            errorText="Please enter a valid image url!"
            keyboardType="numeric"
            onInputChange={inputChangeHandler}
            returnKeyType="next"
            initialValue={editedItem ? `${editedItem.quantity}` : ''}//to convert into string
            required
          />

          <Input
            id="price"
            label="Price/pc"
            errorText="Please enter a valid price!"
            keyboardType="decimal-pad"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            required
            initialValue={editedItem ? `${editedItem.price}` : ''}//to convert into string
            min={0.1}
          />

          <Input
            id="description"
            label="Description"
            errorText="Please enter a valid description!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            multiline
            initialValue={editedItem ? editedItem.description[0] : ''}
            onInputChange={inputChangeHandler}
            numberOfLines={3}
            required
            minLength={5}
          />
          {deleteComponent}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

EditItemScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: 'Add Product',
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
};

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

export default EditItemScreen;