import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TextInput } from 'react-native';
import ManageList from '../components/UI/ManageList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const ManageItemScreen = props => {
    const availableItems = useSelector(state => state.items.items);
    const [text, settext] = useState('');
    const [dataSource, setdataSource] = useState('');

    const SearchFilterFunction = (text) => {
        //passing the inserted text in textinput
        const newData = availableItems.filter(function (item) {
            //applying filter for the inserted text in search bar
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setdataSource(newData)
        settext(text)
    }
    return (
        <View style={styles.container}>
            <View style={styles.SectionStyle}>
                <Ionicons style={styles.ImageStyle}
                    name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
                    size={20} color="#000" />
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={text => SearchFilterFunction(text)}
                    underlineColorAndroid='transparent'
                    value={text}
                    autoCorrect={false}
                    placeholder="Search Here"
                />

            </View>
            <ManageList
                listData={dataSource || availableItems}
                navigation={props.navigation} />
        </View>
    );

};

ManageItemScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Manage Inventory',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans'
        },
    }
};
const styles = StyleSheet.create({

    textInputStyle: {
        flex: 1,
        fontSize: 15
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        height: 42,
        borderRadius: 18,
        margin: 10
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        alignItems: 'center'
    },
    container: {
        flex: 1,
    },
});


export default ManageItemScreen;