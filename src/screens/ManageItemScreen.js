import React from 'react';
import ManageList from '../components/UI/ManageList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

const ManageItemScreen = props => {
    const availableItems = useSelector(state => state.items.items);
    return (
        <ManageList
            listData={availableItems}
            navigation={props.navigation} />
    );

};

ManageItemScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Manage Inventory',
    }
};

export default ManageItemScreen;