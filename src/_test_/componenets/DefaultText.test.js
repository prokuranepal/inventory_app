import React from 'react';
import DefaultText from '../../components/Component/DefaultText';
import { View, Text } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import test_function from './test_function';
configure({ adapter: new Adapter() });

test_function(["<text render/>",1],['renders correctly','renders the length of view'],[<DefaultText />, Text])
