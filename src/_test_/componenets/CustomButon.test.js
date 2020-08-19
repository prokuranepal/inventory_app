import React from 'react';
import CustomButton from '../../components/Component/CustomButton';
import { View, Button, TouchableOpacity } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import test_function from './test_function';

configure({ adapter: new Adapter() });
test_function(["<CustomButton View/>",1,1],['renders correctly','renders the length of view'],[<CustomButton />,View, Button],null)

