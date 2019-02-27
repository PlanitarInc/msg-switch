import Vue from 'vue';
import { mount } from '@vue/test-utils';

import ParentScopeStdMessages from './resources-vslot/ParentScopeStdMessages';
import ParentScopeOverrideMessages from './resources-vslot/ParentScopeOverrideMessages';
import CtxOverrideWildcard from './resources-vslot/CtxOverrideWildcard';
import ParentScopeDynMessages from './resources-vslot/ParentScopeDynMessages';
import ParentScopeDynOverrideMessages from './resources-vslot/ParentScopeDynOverrideMessages';

describe('Integration', () => {
  describe('context', () => {
    describe('ParentScopeStdMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(ParentScopeStdMessages, {
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

    describe('ParentScopeOverrideMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(ParentScopeOverrideMessages, {
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

    describe('ParentScopeDynMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(ParentScopeDynMessages, {
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

    describe('ParentScopeDynOverrideMessages', () => {
      let wrapper = null;

      beforeAll(() => {
        wrapper = mount(ParentScopeDynOverrideMessages, {
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
