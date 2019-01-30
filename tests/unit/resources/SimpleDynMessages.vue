<template>
  <SimpleStdMessages :code="code">
    <MsgCase when="two">
      custom two
    </MsgCase>
    <MsgCase when="dyn">
      dynamic message
    </MsgCase>
  </SimpleStdMessages>
</template>

<script>
import SimpleStdMessages from './SimpleStdMessages';
import { MsgCase } from '../../../src';

export default {
  components: {
    SimpleStdMessages,
    MsgCase,
  },
  props: {
    code: { type: String, default: '' },
  },
};
</script>
