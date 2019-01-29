<template>
  <span v-if="shown" class="msg-case">
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
    return {
      currentValue: '',
      shown: false,
    };
  },

  mounted() {
    this.registerMsgCase(this.when, this);
  },

  methods: {
    show(currentValue) {
      this.currentValue = currentValue;
      this.shown = true;
    },
    hide() {
      this.shown = false;
    },
  },
};
</script>
