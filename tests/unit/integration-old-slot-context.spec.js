import Vue from 'vue';
import { mount } from '@vue/test-utils';

import CtxStdMessages from './resources-old-slot/CtxStdMessages';
import CtxOverrideMessages from './resources-old-slot/CtxOverrideMessages';
import CtxOverrideWildcard from './resources-old-slot/CtxOverrideWildcard';
import CtxDynMessages from './resources-old-slot/CtxDynMessages';
import CtxDynOverrideMessages from './resources-old-slot/CtxDynOverrideMessages';

describe('Integration', () => {
  describe('context', () => {
    describe('CtxStdMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(CtxStdMessages, {
          propsData: {
            obj: { code: 1 },
          },
        });
      });

      test('should display case "one"', () => {
        expect(wrapper.text()).toEqual('default one');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display case "two"', async () => {
        wrapper.setProps({
          obj: { code: 2, d: { e: { e: { p: 'deep prop' } } } },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('default two (deep prop)');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display wildcard case for "dyn"', async () => {
        wrapper.setProps({
          obj: { code: 'dyn' },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('default wildcard (dyn)');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display wildcard message for "unknown"', async () => {
        wrapper.setProps({
          obj: { code: 'unknown', other: 'other prop' },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('default wildcard (unknown) (other prop)');
        expect(wrapper.html()).toMatchSnapshot();
      });
    });

    describe('CtxOverrideMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(CtxOverrideMessages, {
          propsData: {
            obj: { code: 1 },
          },
        });
      });

      test('should display case "one"', () => {
        expect(wrapper.text()).toEqual('default one');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display custom case "two"', async () => {
        wrapper.setProps({
          obj: { code: 2, d: { e: { e: { p: 'deep prop' } } } },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('custom two [deep prop]');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display wildcard case for "dyn"', async () => {
        wrapper.setProps({
          obj: { code: 'dyn' },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('default wildcard (dyn)');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display wildcard message for "unknown"', async () => {
        wrapper.setProps({
          obj: { code: 'unknown', other: 'other prop' },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('default wildcard (unknown) (other prop)');
        expect(wrapper.html()).toMatchSnapshot();
      });
    });

    describe('CtxOverrideWildcard', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(CtxOverrideWildcard, {
          propsData: {
            obj: { code: 1 },
          },
        });
      });

      test('should display case "one"', async () => {
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('default one');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display custom case "two"', async () => {
        wrapper.setProps({
          obj: { code: 2, d: { e: { e: { p: 'deep prop' } } } },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('custom two @deep prop@');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display custom wildcard case for "dyn"', async () => {
        wrapper.setProps({
          obj: { code: 'dyn' },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('custom wildcard |dyn|');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display custom wildcard message for "unknown"', async () => {
        wrapper.setProps({
          obj: { code: 'unknown', other: 'other prop' },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('custom wildcard |unknown|other prop|');
        expect(wrapper.html()).toMatchSnapshot();
      });
    });

    describe('CtxDynMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(CtxDynMessages, {
          propsData: {
            obj: { code: 1 },
          },
        });
      });

      test('should display case "one"', () => {
        expect(wrapper.text()).toEqual('default one');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display custom case "two"', async () => {
        wrapper.setProps({
          obj: { code: 2, d: { e: { e: { p: 'deep prop' } } } },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('custom two @deep prop@');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display dynamic case for "dyn"', async () => {
        wrapper.setProps({
          obj: { code: 'dyn' },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('dynamic message -dyn-');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display custom wildcard message for "unknown"', async () => {
        wrapper.setProps({
          obj: { code: 'unknown', other: 'other prop' },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('default wildcard (unknown) (other prop)');
        expect(wrapper.html()).toMatchSnapshot();
      });
    });

    describe('CtxDynOverrideMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(CtxDynOverrideMessages, {
          propsData: {
            obj: { code: 1 },
          },
        });
      });

      test('should display case "one"', () => {
        expect(wrapper.text()).toEqual('default one');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display custom case "two"', async () => {
        wrapper.setProps({
          obj: { code: 2, d: { e: { e: { p: 'deep prop' } } } },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('custom two @deep prop@');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display dynamic case for "dyn"', async () => {
        wrapper.setProps({
          obj: { code: 'dyn' },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('dynamic message -dyn-');
        expect(wrapper.html()).toMatchSnapshot();
      });

      test('should display custom wildcard message for "unknown"', async () => {
        wrapper.setProps({
          obj: { code: 'unknown', other: 'other prop' },
        });
        await Vue.nextTick();
        expect(wrapper.text()).toEqual('custom wildcard |unknown|other prop|');
        expect(wrapper.html()).toMatchSnapshot();
      });
    });
  });
});
