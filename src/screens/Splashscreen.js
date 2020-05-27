import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';

class SplashScreen extends React.Component {


    // performTimeConsumingTask = async () => {
    //     return new Promise((resolve) =>
    //         setTimeout(
    //             () => { resolve('result') },
    //             3000
    //         )
    //     )
    // }

    componentDidMount() {
        // const data = await this.performTimeConsumingTask();
        // if (data !== null) {
        //     this.props.navigation.navigate('Tabs');
        // }
        setTimeout(
            () => { this.props.navigation.navigate('Tabs') },
            3000
        )
    }



    render() {
        return (
            <View style={styles.viewStyles}>
                <View>
                    <Text style={styles.textStyles}>IMS</Text>
                </View>
                <View style={styles.image}>
                    <Image source={require('../../assets/image.png')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.accentColor
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    image: {
        width: '80%',
        height: '50%',

    }
})

export default SplashScreen;




