<template>
  <CtxStdMessages :obj="obj">
    <MsgCase when="two">
      <template #default>
        custom two [{{ obj.d.e.e.p }}]
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
