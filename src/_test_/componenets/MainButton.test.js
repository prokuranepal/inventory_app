import React from 'react';
import MainButton from '../../components/Component/MainButton';
import { View, Text, TouchableOpacity } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import test_function from './test_function';
configure({ adapter: new Adapter() });

const elements=[<MainButton/>, View, TouchableOpacity, Text];
const name_lengths=["<Button view/>",1,1,1]

test_function(name_lengths,['renders correctly','renders the length of view'],elements)
