import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import InventoryItem from '../Component/InventoryItem';

const ItemList = props => {

    const renderInventoryItem = itemData => {

        return (
            <InventoryItem
                title={itemData.item.name}
                image={itemData.item.image}
                quantity={itemData.item.quantity}
                company="abc"//{itemData.item.company} 
                price={itemData.item.price}
                titles={props.catTitle}
                id={itemData.item._id}
                onSelectItem={() => {
                    // console.log("item clicked", itemData.item._id)
                    props.navigation.navigate({
                        routeName: 'ItemDetail',
                        params: {
                            itemId: itemData.item._id,
                            itemTitle: itemData.item.name,

                        }
                    });
                }}
            />
        );
    };
    return (
        <View style={styles.list}>
            {props.attentionMessage}
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item._id}
                renderItem={renderInventoryItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});
export default ItemList;

