import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { View } from 'react-native';
/*
element_name = "<CustomButton>" -->name of element being tested
description= 
*/
export default function test_function(element_name, description1,description2,element ,cmpEle,expLength){
    describe(element_name, () => {
    
    
        test(description1, () => {
            const tree = renderer.create(element).toJSON();
            expect(tree).toMatchSnapshot();
        });
        it(description2, () => {
            const wrapper = shallow(element);
            expect(wrapper.find(cmpEle).length).toEqual(expLength);
        })
    
    });
    }
    