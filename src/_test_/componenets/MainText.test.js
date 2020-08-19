import React from 'react';
import MainText from '../../components/Component/MainText';
import { Text } from 'react-native';
import { configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import test_function from './test_function';


configure({ adapter: new Adapter() });

test_function(["<Button View/>",1],['renders correctly','renders the length of view'],[<MainText />,Text],null)
