<template>
  <CtxStdMessages :obj="obj">
    <MsgCase when="two">
      <template #default="{ ctx }">
        custom two @{{ ctx.d.e.e.p }}@
      </template>
    </MsgCase>
    <MsgCase when="*">
      <template #default="{ ctx, value }">
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        custom wildcard |{{ value }}<span v-if="!!ctx.other">|{{ ctx.other }}</span>|
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
