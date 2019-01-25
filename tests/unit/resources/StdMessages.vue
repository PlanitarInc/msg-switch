<template>
  <MsgSwitch :slot-scope="{ value }" :value="value">
    <MsgCase when="one">
      default one
    </MsgCase>
    <MsgCase when="two">
      default two
    </MsgCase>
    <MsgCase :slot-scope="{ value }" when="*">
      default wildcard ({{ value }})
    </MsgCase>
    <slot :value="value" />
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
    value: { type: String, default: '' },
  },
};
</script>
