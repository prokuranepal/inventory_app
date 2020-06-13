import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, ImageBackground, ToastAndroid,
    Platform,
    AlertIOS,
    Button
} from 'react-native';
import { BackHandler } from 'react-native';
import Card from '../Component/Card';
import { AntDesign } from '@expo/vector-icons';
import * as cardActions from '../../store/actions/cart';
import { useSelector, useDispatch } from 'react-redux';
import ModalComponent from '../Component/ModalComponent';
const InventoryItem = props => {
    const selectedItem = useSelector(state =>
        state.items.items
    );

    const dispatch = useDispatch();
    const [isModalVisible, setModalVisibility] = useState(false);
    const [selectedItemCart, setSelectedItemCart] = useState('');


    const sendCardHandlrer = (id) => {
        const selected = selectedItem.find(item => item._id === id)
        if (Platform.OS === 'android') {
            ToastAndroid.show(selected.title + " has been added to cart", ToastAndroid.SHORT)
        } else {
            AlertIOS.alert(selected.title + " has been added to cart");
        }
        // dispatch(cardActions.addToCart(selected, 1));
        setModalVisibility(true);
        setSelectedItemCart(selected.title);

        // console.log(selected)
    };
    const buttonPressHandler = () => {
        setModalVisibility(false);
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
            <ModalComponent isModalVisible={isModalVisible} >
                <View>
                    <Text>{"Medicine: "}</Text>
                    <Text>{selectedItemCart}</Text>
                    <Button title="save" onPress={buttonPressHandler}></Button>
                </View>
            </ModalComponent>
            <TouchableOpacity onPress={props.onSelectItem} >
                <View>
                    <Card style={styles.summary}>
                        <ImageBackground source={{ uri: props.image }} style={{ width: '40%', height: '100%' }} />
                        <View >
                            <Text style={styles.test} numberOfLines={1}>
                                {props.title}</Text>
                        </View>
                        <View>
                            <Text> {props.quantity}pcs</Text>
                            <Text> Rs. {props.price}/PC</Text>
                            <Text> {props.company.toUpperCase()}</Text>
                        </View>
                        <View >
                            <TouchableOpacity
                                onPress={() => { props.sendCardHandlrer(props.id) }}
                                style={styles.deleteButton}
                            >
                                <AntDesign name="pluscircleo" size={24} color='blue' onPress={() => {
                                    sendCardHandlrer(props.id)
                                }}
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
        fontWeight: 'bold',
        fontSize: 18
    },
    Items: {
        width: '100%',
        height: 100,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',

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
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 10
    },
    deleteButton: {
        marginLeft: 20
    }

})

export default InventoryItem;