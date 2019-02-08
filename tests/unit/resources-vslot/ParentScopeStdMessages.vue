<template>
  <MsgSwitch :value="normalizedCode">
    <slot :obj="obj" />
    <MsgCase when="one">
      default one
    </MsgCase>
    <MsgCase when="two" #default>
      default two ({{ obj.d.e.e.p }})
    </MsgCase>
    <MsgCase when="*" #default="{ value }">
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      default wildcard ({{ value }}) <span v-if="!!obj.other">({{ obj.other }})</span>
    </MsgCase>
  </MsgSwitch>
</template>

<script>
import { MsgSwitch, MsgCase } from "../../../src";

export default {
  components: {
    MsgSwitch,
    MsgCase,
  },
  props: {
    obj: { type: Object, default: null },
  },
  computed: {
    normalizedCode() {
      const { obj } = this;
      switch (obj && obj.code) {
      case 1: return 'one';
      case 2: return 'two';
      default: return obj && obj.code;
      }
    },
  },
};
</script>
