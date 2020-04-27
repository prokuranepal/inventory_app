import React, { useEffect, useCallback, useReducer } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/Component/HeaderButton';
import { useDispatch } from 'react-redux';
import * as itemsActions from '../store/actions/items';
import Input from '../components/UI/Input';

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
  const editedItem = useSelector(state =>
    state.items.items.find(item => item.id === itemId)
  );

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: '',
      company: '',
      description: '',
      quantity: '',
      price: ''
    }
  });

  const submitHandler = useCallback(() => {

    console.log("EditItemScreen", formState)


    dispatch(
      itemsActions.addItems(
        formState.inputValues.title,
        formState.inputValues.company,
        +formState.inputValues.quantity,
        formState.inputValues.description,
        +formState.inputValues.price
      )
    );

    props.navigation.goBack();
  }, [dispatch, formState]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );


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
            initialValue={''}
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
            initialValue={''}
            returnKeyType="next"
            required
          />
          <Input
            id="quantity"
            label="Quantity in pcs"
            errorText="Please enter a valid image url!"
            keyboardType="numeric"
            onInputChange={inputChangeHandler}
            returnKeyType="next"
            initialValue={''}
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
            initialValue={''}
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
            initialValue={''}
            onInputChange={inputChangeHandler}
            numberOfLines={3}
            required
            minLength={5}
          />
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
  }
});

export default EditItemScreen;