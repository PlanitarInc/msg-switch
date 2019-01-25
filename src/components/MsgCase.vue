<template>
  <span class="msg-case">
    <slot :value="currentValue" />
  </span>
</template>

<script>
export default {
  // Provided by a closest ascendant MsgSwitch component
  inject: ['registerMsgCase'],

  props: {
    when: { type: String, default: '' },
  },

  data() {
    return { currentValue: '' };
  },

  mounted() {
    this.registerMsgCase(this.when, this);
  },

  methods: {
    updateCode(currentValue) {
      this.currentValue = currentValue;
    },
  },
};
</script>
