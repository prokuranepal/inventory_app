import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import InventoryItem from '../Component/InventoryItem';

const ItemList = props => {

    const renderItemItem = itemData => {

        return (
            <InventoryItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                quantity={itemData.item.quantity}
                company={itemData.item.company}
                price={itemData.item.price}
                onSelectItem={() => {
                    props.navigation.navigate({
                        routeName: 'ItemDetail',
                        params: {
                            itemId: itemData.item.id,
                            itemTitle: itemData.item.title,
                        }
                    });
                }}
            />
        );
    };
    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderItemItem}
                style={{ width: '100%' }}
            />
            {props.j}
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