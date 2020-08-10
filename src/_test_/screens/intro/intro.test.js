import React from 'react';
import Intro from '../intro/intro';

import renderer from 'react-test-renderer';
import test_function from '../../componenets/test_function';


test_function(["<Intro/>"],["renders correctly"],[<Intro/>], null)
