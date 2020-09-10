import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ManageItem from '../Component/ManageItem';

const ManageList = props => {

    const renderInventoryItem = (itemData, index) => {
        // console.log("manage list ", itemData)

        return (
            <ManageItem
                key={itemData.item._id}
                title={itemData.item.title}
                quantity={itemData.item.quantity}
                company={itemData.item.company}
                price={itemData.item.price}
                serialNo={itemData.index}
                onSelectItem={() => {
                    props.navigation.navigate({
                        routeName: 'AddItem',
                        params: {
                            itemId: itemData.item._id,
                            itemTitle: itemData.item.title,
                        }
                    }
                    );
                }}
            />
        );
    };
    return (
        <View style={styles.list}>
            <View style={styles.title}>
                <Text style={{...styles.topic, flex:0.2}}> SN</Text>
                <Text style={{...styles.topic, flex:0.4}}>ITEM NAME</Text>
                <Text style={{...styles.topic, flex:0.4}}> QUANTITY</Text>
                <Text style={{...styles.topic, flex:0.4}}> COMPANY</Text>
                <Text style={{...styles.topic, flex:0.3}}> PRICE</Text>
            </View>
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
    },
    title: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingBottom: 10,
    },
    topic: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    }
});
export default ManageList;