import Vue from 'vue';
import { mount } from '@vue/test-utils';

import SimpleStdMessages from './resources-vslot/SimpleStdMessages';
import SimpleOverrideMessages from './resources-vslot/SimpleOverrideMessages';
import SimpleOverrideWildcard from './resources-vslot/SimpleOverrideWildcard';
import SimpleDynMessages from './resources-vslot/SimpleDynMessages';
import SimpleDynOverrideMessages from './resources-vslot/SimpleDynOverrideMessages';

describe('Integration', () => {
  describe('simple', () => {
    describe('SimpleStdMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(SimpleStdMessages, {
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

    describe('SimpleOverrideMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(SimpleOverrideMessages, {
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

    describe('SimpleOverrideWildcard', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(SimpleOverrideWildcard, {
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

    describe('SimpleDynMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(SimpleDynMessages, {
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

    describe('SimpleDynOverrideMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(SimpleDynOverrideMessages, {
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
});
