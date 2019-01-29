import { mount } from '@vue/test-utils';
import { MsgSwitch } from '../../src';
import {
  StdMessages,
  OverriddenMessage,
  OverriddenWildcard,
  DynamicMessage,
  DynamicOverriddenWildcard,
} from './resources';

describe('Integration', () => {

  describe('StdMessages', () => {
    let wrapper = null;

    beforeAll(() => {
      wrapper = mount(StdMessages, {
        propsData: { value: 'one' },
      });
    });

    test('should display case "one"', () => {
      expect(wrapper.text()).toEqual('default one');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display case "two"', () => {
      wrapper.setProps({ value: 'two' });
      expect(wrapper.text()).toEqual('default two');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard case for "dyn"', () => {
      wrapper.setProps({ value: 'dyn' });
      expect(wrapper.text()).toEqual('default wildcard (dyn)');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard message for "unknown"', () => {
      wrapper.setProps({ value: 'unknown' });
      expect(wrapper.text()).toEqual('default wildcard (unknown)');
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('OverriddenMessage', () => {
    let wrapper = null;

    beforeAll(() => {
      wrapper = mount(OverriddenMessage, {
        propsData: { value: 'one' },
      });
    });

    test('should display case "one"', () => {
      expect(wrapper.text()).toEqual('default one');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', () => {
      wrapper.setProps({ value: 'two' });
      expect(wrapper.text()).toEqual('custom two');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard case for "dyn"', () => {
      wrapper.setProps({ value: 'dyn' });
      expect(wrapper.text()).toEqual('default wildcard (dyn)');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard message for "unknown"', () => {
      wrapper.setProps({ value: 'unknown' });
      expect(wrapper.text()).toEqual('default wildcard (unknown)');
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('OverriddenWildcard', () => {
    let wrapper = null;

    beforeAll(() => {
      wrapper = mount(OverriddenWildcard, {
        propsData: { value: 'one' },
      });
    });

    test('should display case "one"', () => {
      expect(wrapper.text()).toEqual('default one');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', () => {
      wrapper.setProps({ value: 'two' });
      expect(wrapper.text()).toEqual('custom two');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard case for "dyn"', () => {
      wrapper.setProps({ value: 'dyn' });
      expect(wrapper.text()).toEqual('custom wildcard [dyn]');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard message for "unknown"', () => {
      wrapper.setProps({ value: 'unknown' });
      expect(wrapper.text()).toEqual('custom wildcard [unknown]');
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('DynamicMessage', () => {
    let wrapper = null;

    beforeAll(() => {
      wrapper = mount(DynamicMessage, {
        propsData: { value: 'one' },
      });
    });

    test('should display case "one"', () => {
      expect(wrapper.text()).toEqual('default one');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', () => {
      wrapper.setProps({ value: 'two' });
      expect(wrapper.text()).toEqual('custom two');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display dynamic case for "dyn"', () => {
      wrapper.setProps({ value: 'dyn' });
      expect(wrapper.text()).toEqual('dynamic message');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard message for "unknown"', () => {
      wrapper.setProps({ value: 'unknown' });
      expect(wrapper.text()).toEqual('default wildcard (unknown)');
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('DynamicOverriddenWildcard', () => {
    let wrapper = null;

    beforeAll(() => {
      wrapper = mount(DynamicOverriddenWildcard, {
        propsData: { value: 'one' },
      });
    });

    test('should display case "one"', () => {
      expect(wrapper.text()).toEqual('default one');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', () => {
      wrapper.setProps({ value: 'two' });
      expect(wrapper.text()).toEqual('custom two');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display dynamic case for "dyn"', () => {
      wrapper.setProps({ value: 'dyn' });
      expect(wrapper.text()).toEqual('dynamic message');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard message for "unknown"', () => {
      wrapper.setProps({ value: 'unknown' });
      expect(wrapper.text()).toEqual('custom wildcard [unknown]');
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

});
