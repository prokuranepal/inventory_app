import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ManageItem from '../Component/ManageItem';

const ManageList = props => {

    const renderItemItem = itemData => {

        return (
            <ManageItem
                title={itemData.item.title}
                quantity={itemData.item.quantity}
                company={itemData.item.company}
                price={itemData.item.price}
                serialNo={itemData.item.id}
                onSelectItem={() => {

                }}
            />
        );
    };
    return (
        <View style={styles.list}>
            <View style={styles.title}>
                <Text style={styles.topic}> SN</Text>
                <Text style={styles.topic}>ITEM NAME</Text>
                <Text style={styles.topic}> QUANTITY</Text>
                <Text style={styles.topic}> COMPANY</Text>
                <Text style={styles.topic}> PRICE</Text>
            </View>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderItemItem}
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