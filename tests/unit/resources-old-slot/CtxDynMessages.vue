<template>
  <CtxStdMessages :obj="obj">
    <MsgCase when="two">
      <template slot-scope="{ ctx }">
        custom two @{{ ctx.d.e.e.p }}@
      </template>
    </MsgCase>
    <MsgCase when="dyn">
      <template slot-scope="{ ctx }">
        dynamic message -{{ ctx.code }}-
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
