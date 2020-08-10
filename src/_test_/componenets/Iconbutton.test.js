

import React from 'react';

import IconButton from '../../components/Component/IconButton';

import { Text} from 'react-native';

import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import test_function from './test_function';



configure({ adapter: new Adapter() });


test_function(["<Button view/>",0],['renders correctly','renders the length of view'],[<IconButton />,Text],null)
