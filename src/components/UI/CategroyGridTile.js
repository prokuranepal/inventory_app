
import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Text, Image,StyleSheet, Platform } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    let icon = null;
    if (props.iconValue == "drug-pack") {
        // icon = <Fontisto name={props.iconValue} size={100} color={Colors.iconColor} />
        icon= <Image data-test= "imageIcon1"source={require('../../../assets/medicine.png')}  style={{ width: 150, height: 120, opacity: 0.7 }} />

    }
    else {
        icon = <Ionicons data-test="imageIcon2" name={props.iconValue} size={100} color={Colors.primaryColor} />;

    }
    return (
        <View style={styles.gridItem} >
            <TouchableCmp
            data-test="touchComp"
                onPress={props.onSelect} >

                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <View style={styles.iconContainer}  >
                        {icon}
                    </View>
                    <Text style={styles.title} numberOfLines={2}> {props.title} </Text>
                </View>
            </TouchableCmp>
        </View>
    )
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS == "android" && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 3,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: '#000080'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: "left"
    },
    iconContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.35,


    },


})

export default CategoryGridTile;