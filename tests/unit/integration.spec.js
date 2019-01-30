import Vue from 'Vue';
import { mount } from '@vue/test-utils';
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
        propsData: { code: 'one' },
      });
    });

    test('should display case "one"', () => {
      expect(wrapper.text()).toEqual('default one');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display case "two"', async () => {
      wrapper.setProps({ code: 'two' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('default two');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard case for "dyn"', async () => {
      wrapper.setProps({ code: 'dyn' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('default wildcard (dyn)');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard message for "unknown"', async () => {
      wrapper.setProps({ code: 'unknown' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('default wildcard (unknown)');
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('OverriddenMessage', () => {
    let wrapper = null;

    beforeAll(() => {
      wrapper = mount(OverriddenMessage, {
        propsData: { code: 'one' },
      });
    });

    test('should display case "one"', () => {
      expect(wrapper.text()).toEqual('default one');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', async () => {
      wrapper.setProps({ code: 'two' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('custom two');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard case for "dyn"', async () => {
      wrapper.setProps({ code: 'dyn' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('default wildcard (dyn)');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard message for "unknown"', async () => {
      wrapper.setProps({ code: 'unknown' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('default wildcard (unknown)');
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('OverriddenWildcard', () => {
    let wrapper = null;

    beforeAll(() => {
      wrapper = mount(OverriddenWildcard, {
        propsData: { code: 'one' },
      });
    });

    test('should display case "one"', async () => {
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('default one');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', async () => {
      wrapper.setProps({ code: 'two' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('custom two');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard case for "dyn"', async () => {
      wrapper.setProps({ code: 'dyn' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('custom wildcard [dyn]');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard message for "unknown"', async () => {
      wrapper.setProps({ code: 'unknown' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('custom wildcard [unknown]');
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('DynamicMessage', () => {
    let wrapper = null;

    beforeAll(() => {
      wrapper = mount(DynamicMessage, {
        propsData: { code: 'one' },
      });
    });

    test('should display case "one"', () => {
      expect(wrapper.text()).toEqual('default one');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', async () => {
      wrapper.setProps({ code: 'two' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('custom two');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display dynamic case for "dyn"', async () => {
      wrapper.setProps({ code: 'dyn' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('dynamic message');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard message for "unknown"', async () => {
      wrapper.setProps({ code: 'unknown' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('default wildcard (unknown)');
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('DynamicOverriddenWildcard', () => {
    let wrapper = null;

    beforeAll(() => {
      wrapper = mount(DynamicOverriddenWildcard, {
        propsData: { code: 'one' },
      });
    });

    test('should display case "one"', () => {
      expect(wrapper.text()).toEqual('default one');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', async () => {
      wrapper.setProps({ code: 'two' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('custom two');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display dynamic case for "dyn"', async () => {
      wrapper.setProps({ code: 'dyn' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('dynamic message');
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard message for "unknown"', async () => {
      wrapper.setProps({ code: 'unknown' });
      await Vue.nextTick();
      expect(wrapper.text()).toEqual('custom wildcard [unknown]');
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

});
