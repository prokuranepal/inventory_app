import { Platform } from 'react-native';
import Colors from '../constants/Colors'

const navigationOptions=(headerTitleString)=>{
    return (
        {
            headerTitle: headerTitleString,
            headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
            headerTitleStyle: {
            fontFamily: 'open-sans'
    }})

}

export default navigationOptions;