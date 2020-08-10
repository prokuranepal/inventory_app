import React from 'react';
import App from '../../../App';
import { configure, mount, EnzymeAdapter } from 'enzyme';
import { JestHook } from 'jest-watcher';
import { shallow } from 'react-native-testing-library';

// JestHook.mock('expo-font');
configure({ adapter: new EnzymeAdapter })
const setup = (props = {}, state = null) => {
    return shallow(<App {...props} />)
}
it("Renders <App /> component correctly", () => { })