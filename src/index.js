import MsgSwitch from './components/MsgSwitch';
import MsgCase from './components/MsgCase';

export { MsgSwitch, MsgCase };

// Export default is the plugin
export default {
  install(Vue) {
    Vue.component('MsgSwitch', MsgSwitch);
    Vue.component('MsgCase', MsgCase);
  },
};
