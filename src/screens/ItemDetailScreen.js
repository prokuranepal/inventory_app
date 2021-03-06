import React, { useEffect, useCallback } from 'react';
import {
    ScrollView,
    View,
    Image,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import DefaultText from '../components/Component/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import navigationOptions from '../utility/navigationOptions';

// const ListItem = props => {
//     return (
//         <View style={styles.listItem}>
//             <DefaultText>{props.children}</DefaultText>
//         </View>
//     );
// };
const ItemDetailScreen = props => {
    const itemId = props.navigation.getParam('itemId');
    const availableItems = useSelector(state => state.items.items)
    const selectedItem = availableItems.find(item => item._id === itemId);
    const dispatch = useDispatch();

    return (
        <ScrollView>
            <Image source={{ uri: selectedItem.image }} style={styles.image} data-test= "imageComp"/>
            <View style={styles.details}>
                <DefaultText data-test="quantityComp">{selectedItem.quantity}pcs</DefaultText>
                <DefaultText data-test="companyComp">{selectedItem.company}</DefaultText>
                <DefaultText  data-test="priceComp">Rs. {selectedItem.price}/PC</DefaultText>
            </View>
            <Text style={styles.title}>Description</Text>
            <DefaultText style={styles.description} data-test="descriptionComp">{selectedItem.description}</DefaultText>

        </ScrollView >
    );
};
ItemDetailScreen.navigationOptions = navigationData => {
    const itemTitle = navigationData.navigation.getParam('itemTitle');
    return navigationOptions(itemTitle)
};
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    },
    description: {

        marginVertical: 15,
        marginHorizontal: 30
    }
});
export default ItemDetailScreen;


