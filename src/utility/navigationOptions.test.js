import navigationOptions from './navigationOptions';
import Colors from '../constants/Colors'
import { JestEnvironment } from '@jest/environment/build/';
import {mockPlatform} from '../_test_/componenets/test_function'



const expected = {
    "headerStyle": {
        "backgroundColor": Colors.primaryColor
    },
    "headerTitle": "Android Inventory",
    "headerTitleStyle": {
        "fontFamily": "open-sans"
    }
}
const expectedios = {
      ...expected, 
      headerStyle: {...expected.headerStyle, backgroundColor:''},
      headerTitle: "Ios Inventory"
}

test("test navigation options ", () => {
    mockPlatform('android');
    expect(navigationOptions("Android Inventory"))
        .toMatchObject(expected)
    mockPlatform('ios')
    expect(navigationOptions("Ios Inventory"))
    .toMatchObject(expectedios)
});
