
import React from 'react';
import Modal from 'react-native-modal';
const ModalComponent = props => {
    return (
        <Modal isVisible={props.isModalVisible} style={{ backgroundColor: 'white' }}>
            {props.children}
        </Modal>
    )
}
export default ModalComponent;