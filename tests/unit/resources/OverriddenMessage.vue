<template>
  <StdMessages :value="value">
    <MsgCase when="two">
      custom two
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
