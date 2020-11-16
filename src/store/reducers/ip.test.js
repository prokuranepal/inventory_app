import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr} from '../../_test_/componenets/test_function'
import {UPDATE_IP, CHANGE_MODE, updateIP, changeMode} from '../actions/ip';
import ipReducer , { initialState} from './ip'
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('ip', () => {
    it("returns default initial state", () =>
    {
      const newState = ipReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving UPDATE_IP", () =>
    {
      const newState = ipReducer(undefined, {type:UPDATE_IP, ip:"newIP"})
      expect(newState).toEqual({...initialState, ip:"http://newIP:3000"})
    });
    it("on receiving CHANGE_MODE", () =>
    {
      const newState = ipReducer(undefined, {type:CHANGE_MODE})
      expect(newState).toEqual({...initialState, newIP: !initialState.newIP})
    });
    });
