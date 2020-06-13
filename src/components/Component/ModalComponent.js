
import React from 'react';
import Modal from 'react-native-modal';
import { Dimensions, Platform } from 'react-native';


const ModalComponent = props => {
    return (
        <Modal isVisible={props.isModalVisible} style={{ marginHorizontal: 60, marginVertical: 118, backgroundColor: 'white', justifyContent: 'flex-start' }}
        >
            {props.children}
        </Modal>
    )
}
export default ModalComponent;