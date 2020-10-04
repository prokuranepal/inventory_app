import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TextInput } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/Component/HeaderButton';
import ItemList from '../components/UI/ItemList';
import { useSelector, Usedispatch, useEffect } from 'react-redux';
import DefaultText from '../components/Component/DefaultText';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const ItemListScreen = props => {

    const catTitle = props.navigation.getParam('title');
    const [text, settext] = useState('');
    const [dataSource, setdataSource] = useState('');
    let availableItems = null;
    console.log("catTitle", catTitle)
    let attentionMsg = null;
    switch (catTitle) {
        case "Attention":
            availableItems = useSelector(state => state.items.attentionItems)
            attentionMsg = <DefaultText style={{ color: 'red', marginBottom: 10, fontSize: 16, fontFamily: 'open-sans-bold' }}>Items with quantity below 30 are:</DefaultText>

            break;
        case "Type":
            const title = props.navigation.getParam('value');
            const allItems = useSelector(state => state.items.items)
            availableItems = allItems.filter(item => {
                if (item.type === title) {
                    return true
                }
                return false;
            });
            break;
        case "all":
            availableItems = useSelector(state => state.items.items)

            break;
        default:
            break;
    }

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
        // console.log(newData, text)
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
            <ItemList
                attentionMessage={attentionMsg}
                listData={dataSource || availableItems}
                navigation={props.navigation}
                catTitle={catTitle}
            />

        </View>
    );

};

ItemListScreen.navigationOptions = navigationData => {
    const value = navigationData.navigation.getParam('value');
    return {
        headerTitle: value,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Save"
                iconName={
                  Platform.OS === 'android' ? 'ios-cart' : 'ios-cart'
                }
                onPress={()=>{navigationData.navigation.navigate("Cart")}}
              />
            </HeaderButtons>
          )

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
        justifyContent: 'center',
        alignItems: 'center'
    },
});


export default ItemListScreen;
