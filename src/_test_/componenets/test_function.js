import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

export default function test_function(name_length, descriptions,elements, extra_test){
    describe(name_length[0], () => {
        test(descriptions[0], () => {
            const tree = renderer.create(elements[0]).toJSON();
            expect(tree).toMatchSnapshot();
        });
        if(descriptions[1]){
        it(descriptions[1], () => {
            const wrapper = shallow(elements[0]);
            elements.map((element,index)=>{
                if (index!=0)
                {
                    expect(wrapper.find(element).length).toEqual(name_length[index]);
                }
            })
        })
        }
    });
    }
    