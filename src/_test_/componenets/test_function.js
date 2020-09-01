import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

/*
    name_length =[component name("<CustomButton>")"), 
        number of times the compnent is expected to render 
        component to corresponding index in elements( here 1 for View),2 for Text, 1 for Button]
    description= ["renders correctly", "renders the length of component ", ]-->description for each test here 2
    elements = [ component being tested (<CustomButton>), types of elements including children to test<View>,<Text>, <Button>]
*/


export  const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

//  jest.mock("Platform",()=>"android")
export const mockPlatform = OS => {
    jest.resetModules();
    jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
      OS,
      select: config => config[OS],
    }));
  };

export default function test_function(name_length, descriptions,elements, extra_test){
    describe(name_length[0], () => {

        afterEach(() => {
            jest.clearAllMocks();
          });

        test(descriptions[0], () => {
            const tree = renderer.create(elements[0]).toJSON();
            expect(tree).toMatchSnapshot();
        });
        if(descriptions[1] && elements[0]){
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
    if(extra_test)
        {
            extra_test;
        }
    }
    