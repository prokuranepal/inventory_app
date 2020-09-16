import React, { useState } from 'react';
import {
    View, Text,
    TextInput,
    StyleSheet, TouchableOpacity,
    ImageBackground, ToastAndroid,
    Platform,
    AlertIOS,
    Button,
    KeyboardAvoidingView
} from 'react-native';
import { BackHandler } from 'react-native';
import Card from '../Component/Card';
import { AntDesign } from '@expo/vector-icons';
import * as cardActions from '../../store/actions/cart';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../UI/Input';

import ModalComponent from '../Component/ModalComponent';
import { ScrollView } from 'react-native-gesture-handler';
const InventoryItem = props => {
    const selectedItem = useSelector(state =>
        state.items.items
    );

    const dispatch = useDispatch();
    const [isModalVisible, setModalVisibility] = useState(false);
    const [selectedItemCart, setSelectedItemCart] = useState('');
    const [quantityInput, setQuantityInput] = useState('1');


    const sendCardHandlrer = (id) => {

        const selected = selectedItem.find(item => item._id === id)
        setModalVisibility(true);
        setSelectedItemCart(selected);

        console.log('invent',id,selected,selectedItemCart.title)
    };
    const cancelPressHandler = () => {
        setModalVisibility(false);
    }
    const confirmPressHandler = () => {
        // const selected = selectedItem.find(item => item._id === id)
        setModalVisibility(false);
        dispatch(cardActions.addToCart(selectedItemCart, quantityInput));

        if (Platform.OS === 'android') {

            ToastAndroid.show(quantityInput + ' ' + selectedItemCart.title + " has been added to cart", ToastAndroid.SHORT)
        } else {
            AlertIOS.alert(quantityInput + " " + selectedItemCart.title + " has been added to cart");
        }
    }
    const quantityInputChange = (value) => {
        setQuantityInput(value)
    }
    return (
        /*    <>
               {{props.titles !== 'Type' ?
                   <View style={styles.Item}>
                       <TouchableOpacity onPress={props.onSelectItem} >
                           <View>
                               <View style={{ ...styles.Row, ...styles.Header }}>
                                   <ImageBackground source={{ uri: props.image }} style={styles.bgImage} >
                                       <View style={styles.titleContainer}>
                                           <Text style={styles.title} numberOfLines={1}>
                                               {props.title}
                                           </Text>
                                       </View>
                                   </ImageBackground>
                               </View>
                               <View style={{ ...styles.Row, ...styles.Details }}>
                                   <Text> {props.quantity}pcs</Text>
                                   <Text> {props.company.toUpperCase()}</Text>
                                   <Text> Rs. {props.price}/PC</Text>
   
                               </View>
                           </View>
                       </TouchableOpacity>
                   </View > : }*/

        <View style={styles.Items}>
            <ModalComponent isModalVisible={isModalVisible}  data-test="modalComp" >
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="height"
                    keyboardVerticalOffset={10}>
                    <ScrollView>
                        <View style={{
                            marginTop: 50,
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 300,
                                height: 280
                            }}>
                                <Text style={{ ...styles.label, marginTop: 0 }} data-test="medTitle">Medicine Name : {selectedItemCart.title}</Text>
                                <Text style={styles.label} data-test="medRate">Rate : Rs. {selectedItemCart.price}/pc</Text>
                                <Text style={styles.label} data-test="medTotal">Price : Rs. {selectedItemCart.price * quantityInput}</Text>
                                <Text style={styles.label} data-test="medQuan">Available Quantity : {selectedItemCart.quantity}</Text>

                                <View style={{ flexDirection: "row", alignItems: 'center' }} >
                                    <Text style={styles.label}>Quantity : </Text>
                                    <TextInput style={{
                                        paddingHorizontal: 2,
                                        paddingVertical: 5,
                                        borderBottomColor: '#ccc',
                                        borderBottomWidth: 1,

                                        width: 105,

                                    }}
                                        keyboardType="numeric"
                                        returnKeyType="next"
                                        required
                                        value={quantityInput}
                                        data-test="onChangeQuan"
                                        onChangeText={(text) => quantityInputChange(text)}
                                    ></TextInput>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
                                    <Button title="CONFIRM "  color="#3aae6d" onPress={confirmPressHandler} style={styles.confirmButton} data-test="confirmComp"></Button>
                                    <Button title="CANCEL " color="#3aae6d" onPress={cancelPressHandler} style={styles.cancelButton} data-test="cancelComp"></Button>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ModalComponent >
            <TouchableOpacity onPress={props.onSelectItem} style={{width:"100%"}} data-test="touchCard">
                <View style={{width:"100%",alignItems:"center"}} >
                    <Card style={{...styles.summary, width:"86%", flexDirection:"row", justifyContent:"space-between"}}>
                        <ImageBackground source={{ uri: props.image }} style={{ width: '100%', height: '100%', flex:1 }} />
                        <View style={{flex:2, paddingLeft:20}}>
                            <Text style={styles.test} numberOfLines={1} data-test="titleComp">
                                {props.title}</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text data-test="quantityComp"> {props.quantity}pcs</Text>
                            <Text data-test="priceComp"> Rs. {props.price}/PC</Text>
                            <Text data-test="companyComp"> {props.company}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity
                                onPress={() => { props.sendCardHandlrer(props.id) }}
                                style={styles.deleteButton} data-test="addComp"
                            >
                                <AntDesign name="pluscircle" size={24} color='green' onPress={() => {
                                    sendCardHandlrer(props.id)
                                }} data-test="addComp2"
                                />
                            </TouchableOpacity>

                        </View>
                    </Card>
                </View>
            </TouchableOpacity>
        </View >
        // }
        //     </>
    )

}


const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
    , title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    Item: {
        width: '100%',
        height: 200,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',

    },
    test: {
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        fontSize: 18
    },
    Items: {
        flex:1,
        height: 100,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent:'space-around'

    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,
    Header: {
        height: '85%'
    },
    Details: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: 'flex-end'
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
        padding: 10
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 10,
    },
    deleteButton: {
        marginLeft: 20
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginTop: 20,
        marginLeft: 35,
        fontSize: 16
    },
   

})

export default InventoryItem;