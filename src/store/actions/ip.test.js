import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr} from '../../_test_/componenets/test_function'
import {UPDATE_IP, CHANGE_MODE, updateIP, changeMode} from './ip';
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()




describe('ip', () => {
  it("returns an action with type UPDATE_IP", () =>
        {
          const action = updateIP()
          expect(action).toEqual({type: UPDATE_IP}) 
        });

        it("returns an action with type CHANGE_MODE", () =>
        {
          const action = changeMode()
          expect(action).toEqual({type: CHANGE_MODE}) 
        });     
    });
