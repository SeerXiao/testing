import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import AuthPage from "./AuthPage";

configure({adapter: new Adapter()});

describe('AuthPage', () => {
    it('AuthPage отрисовался', () => {
        const wrapper = shallow(<AuthPage/>);
        expect(wrapper.find('div')).toHaveLength(1);
    })
})
