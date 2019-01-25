<template>
  <StdMessages :value="value">
    <MsgCase when="two">
      custom two
    </MsgCase>
    <MsgCase when="dyn">
      dynamic message
    </MsgCase>
    <MsgCase :slot-scope="{ value }" when="*">
      custom wildcard [{{ value }}]
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
    value: { type: String, default: '' },
  },
};
</script>
