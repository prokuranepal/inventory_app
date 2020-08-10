// import React from 'react';
// import Card from '../../components/Component/Card';
// import { View } from 'react-native';
// import { configure, mount, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
// configure({ adapter: new Adapter() });


// describe("<card view/>", () => {


//     test('renders correctly', () => {
//         const tree = renderer.create(<Card />).toJSON();
//         expect(tree).toMatchSnapshot();
//     });
//     it('renders the length of view', () => {
//         const wrapper = shallow(<Card />);
//         expect(wrapper.find(View).length).toEqual(1);
//     })

// });


import React from 'react';
import Card from '../../components/Component/Card';
import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { View} from 'react-native';
import test_function from './test_function';

configure({ adapter: new Adapter() });
test_function(["<card view/>",1],['renders correctly','renders the length of view'],[<Card />,View],null)





