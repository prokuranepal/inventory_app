
import React from 'react';
import Modal from 'react-native-modal';
import { Dimensions, Platform } from 'react-native';

/**
 * 
 * @returns {Modal} returns a modal Component for ordering, adding new item, editing 
 * @param {props} isModalVisibile- controls the visibility of the modal
 * @property {children} props.children any children component usually Text, View to be wrapped within modal component
 * 
 */
const ModalComponent = props => {
    return (
        <Modal isVisible={props.isModalVisible} style={{ marginHorizontal: 60, marginVertical: 118, backgroundColor: 'white', justifyContent: 'flex-start' }}
        >
            {props.children}
        </Modal>
    )
}
export default ModalComponent;