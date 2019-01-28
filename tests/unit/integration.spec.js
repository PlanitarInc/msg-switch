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
        propsData: { value: 'one' },
      });
    });

    test('should have all cases', () => {
      expect(
        listAllCases(wrapper).map(c => `${c.props.when}: ${c.text}`),
      ).toEqual([
        'one: default one',
        'two: default two',
        '*: default wildcard (one)',
      ]);
    });

    test('should display case "one"', () => {
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default one',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display case "two"', () => {
      wrapper.setProps({ value: 'two' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default two',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard case for "dyn"', () => {
      wrapper.setProps({ value: 'dyn' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default wildcard (dyn)',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard message for "unknown"', () => {
      wrapper.setProps({ value: 'unknown' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default wildcard (unknown)',
      ]);
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

    test('should have all cases', () => {
      expect(
        listAllCases(wrapper).map(c => `${c.props.when}: ${c.text}`),
      ).toEqual([
        'two: custom two',
        'one: default one',
        'two: default two',
        '*: default wildcard (one)',
      ]);
    });

    test('should display case "one"', () => {
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default one',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', () => {
      wrapper.setProps({ value: 'two' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'custom two',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard case for "dyn"', () => {
      wrapper.setProps({ value: 'dyn' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default wildcard (dyn)',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display wildcard message for "unknown"', () => {
      wrapper.setProps({ value: 'unknown' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default wildcard (unknown)',
      ]);
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

    test('should have all cases', () => {
      expect(
        listAllCases(wrapper).map(c => `${c.props.when}: ${c.text}`),
      ).toEqual([
        'two: custom two',
        '*: custom wildcard [one]',
        'one: default one',
        'two: default two',
        '*: default wildcard (one)',
      ]);
    });

    test('should display case "one"', () => {
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default one',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', () => {
      wrapper.setProps({ value: 'two' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'custom two',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard case for "dyn"', () => {
      wrapper.setProps({ value: 'dyn' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'custom wildcard [dyn]',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard message for "unknown"', () => {
      wrapper.setProps({ value: 'unknown' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'custom wildcard [unknown]',
      ]);
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

    test('should have all cases', () => {
      expect(
        listAllCases(wrapper).map(c => `${c.props.when}: ${c.text}`),
      ).toEqual([
        'two: custom two',
        'dyn: dynamic message',
        'one: default one',
        'two: default two',
        '*: default wildcard (one)',
      ]);
    });

    test('should display case "one"', () => {
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default one',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', () => {
      wrapper.setProps({ value: 'two' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'custom two',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display dynamic case for "dyn"', () => {
      wrapper.setProps({ value: 'dyn' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'dynamic message',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard message for "unknown"', () => {
      wrapper.setProps({ value: 'unknown' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default wildcard (unknown)',
      ]);
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

    test('should have all cases', () => {
      expect(
        listAllCases(wrapper).map(c => `${c.props.when}: ${c.text}`),
      ).toEqual([
        'two: custom two',
        'dyn: dynamic message',
        '*: custom wildcard [one]',
        'one: default one',
        'two: default two',
        '*: default wildcard (one)',
      ]);
    });

    test('should display case "one"', () => {
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'default one',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom case "two"', () => {
      wrapper.setProps({ value: 'two' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'custom two',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display dynamic case for "dyn"', () => {
      wrapper.setProps({ value: 'dyn' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'dynamic message',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should display custom wildcard message for "unknown"', () => {
      wrapper.setProps({ value: 'unknown' });
      expect(listVisibleCases(wrapper).map(c => c.text)).toEqual([
        'custom wildcard [unknown]',
      ]);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

});

const listAllCases = wrapper => {
  const visibleCases = wrapper.findAll('.msg-case');
  const res = [];
  for (let i = 0; i < visibleCases.length; i++) {
    const c = visibleCases.at(i);
    res[i] = {
      classes: c.classes(),
      props: c.props(),
      text: c.text(),
    };
  }
  return res;
};

const listVisibleCases = wrapper => {
  // We test for `match` class because of the following limitation:
  // > Your test can only detect inline styles when running in `jsdom`.
  // (source https://vue-test-utils.vuejs.org/guides/#detecting-styles)
  return listAllCases(wrapper).filter(c => c.classes.includes('match'));
};
