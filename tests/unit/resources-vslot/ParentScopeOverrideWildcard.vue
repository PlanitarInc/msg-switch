<template>
  <CtxStdMessages :obj="obj">
    <MsgCase when="two">
      <template #default>
        custom two @{{ obj.d.e.e.p }}@
      </template>
    </MsgCase>
    <MsgCase when="*">
      <template #default="{ value }">
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        custom wildcard |{{ value }}<span v-if="!!obj.other">|{{ obj.other }}</span>|
      </template>
    </MsgCase>
  </CtxStdMessages>
</template>

<script>
import CtxStdMessages from './CtxStdMessages';
import { MsgCase } from '../../../src';

export default {
  components: {
    CtxStdMessages,
    MsgCase,
  },
  props: {
    obj: { type: Object, default: null },
  },
};
</script>
