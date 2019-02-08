<template>
  <CtxStdMessages :obj="obj">
    <MsgCase when="two" #default>
      custom two @{{ obj.d.e.e.p }}@
    </MsgCase>
    <MsgCase when="dyn" #default>
      dynamic message -{{ obj.code }}-
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
