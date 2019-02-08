<template>
  <MsgSwitch :value="normalizedCode" :ctx="obj">
    <slot :obj="obj" />
    <MsgCase when="one">
      default one
    </MsgCase>
    <MsgCase when="two">
      <template #default="{ ctx }">
        default two ({{ ctx.d.e.e.p }})
      </template>
    </MsgCase>
    <MsgCase when="*">
      <template #default="{ ctx, value }">
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        default wildcard ({{ value }}) <span v-if="!!ctx.other">({{ ctx.other }})</span>
      </template>
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
