import React from "react";
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    Text,
    View,
    StyleSheet,
    Platform
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors'
const iconButton = props => {

    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={{ width: "100%", alignItems: "center" }} >
            <TouchableCmp onPress={props.onPressHandler} >
                <View style={styles.gridItem} >
                    <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                        <View style={styles.iconContainer}>
                            <Ionicons name={props.iconValue} size={100} color={props.iconColor} />
                        </View>

                    </View>

                </View>
            </TouchableCmp>
        </View >
    );

    ;
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 120,
        width: "30%",
        borderRadius: 10,
        alignItems: "center",
        overflow: Platform.OS == "android" && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 1,
        alignItems: "center"

    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1,
        padding: 10,

    },

    iconContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7


    },
});

export default iconButton;