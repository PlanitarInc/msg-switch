<template>
  <StdMessages :code="code">
    <MsgCase when="two">
      custom two
    </MsgCase>
    <MsgCase when="dyn">
      dynamic message
    </MsgCase>
  </StdMessages>
</template>

<script>
import StdMessages from './StdMessages';
import { MsgCase } from '../../../src';

export default {
  components: {
    StdMessages,
    MsgCase,
  },
  props: {
    code: { type: String, default: '' },
  },
};
</script>
