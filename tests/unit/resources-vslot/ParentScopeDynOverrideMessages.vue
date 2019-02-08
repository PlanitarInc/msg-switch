<template>
  <CtxStdMessages :obj="obj">
    <MsgCase when="two" #default>
      custom two @{{ obj.d.e.e.p }}@
    </MsgCase>
    <MsgCase when="dyn" #default>
      dynamic message -{{ obj.code }}-
    </MsgCase>
    <MsgCase when="*" #default="{ value }">
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      custom wildcard |{{ value }}<span v-if="!!obj.other">|{{ obj.other }}</span>|
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
