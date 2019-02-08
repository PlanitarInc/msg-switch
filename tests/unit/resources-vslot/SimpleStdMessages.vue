<template>
  <MsgSwitch :value="code">
    <template #default="{ value }">
      <slot :value="value" />
      <MsgCase when="one">
        default one
      </MsgCase>
      <MsgCase when="two">
        default two
      </MsgCase>
      <MsgCase when="*">
        default wildcard ({{ value }})
      </MsgCase>
    </template>
  </MsgSwitch>
</template>

<script>
import { MsgSwitch, MsgCase } from "../../../src";

export default {
  components: {
    MsgSwitch,
    MsgCase,
  },
  props: {
    code: { type: String, default: '' },
  },
};
</script>
