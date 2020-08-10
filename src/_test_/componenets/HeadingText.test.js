import React from 'react';
import HeadingText from '../../components/Component/HeadingText';
import {Text } from 'react-native';
import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import test_function from './test_function';

configure({ adapter: new Adapter() });

test_function("<Text render/>",'renders correctly','renders the length of view',<HeadingText />,Text,1)
