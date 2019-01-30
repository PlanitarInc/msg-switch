<template>
  <StdMessages :code="code">
    <MsgCase when="two">
      custom two
    </MsgCase>
    <MsgCase when="*">
      <template slot-scope="{ value }">
        custom wildcard [{{ value }}]
      </template>
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
