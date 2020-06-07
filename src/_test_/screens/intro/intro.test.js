import React from 'react';
import Intro from '../intro/intro';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
});