import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

/*
    name_length =[component name("<CustomButton>")"), 
        number of times the compnent is expected to render 
        component to corresponding index in elements( here 1 for View),2 for Text, 1 for Button]
    description= ["renders correctly", "renders the length of component ", ]-->description for each test here 2
    elements = [ component being tested (<CustomButton>), type of component expected(View),Text, Button]
*/
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
        if(extra_test)
        {
            extra_test;
        }
    });
    }
    