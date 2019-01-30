<template>
  <span v-if="isShown" class="msg-case">
    <slot :value="currentValue" :ctx="currentCtx" />
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
      currentCtx: null,
      shownAt: 0,
      hiddenAt: 0,
    };
  },

  computed: {
    isShown() {
      return this.shownAt > this.hiddenAt;
    },
  },

  created() {
    this.registerMsgCase(this.when, this);
  },

  methods: {
    show(epoch, currentValue, currentCtx) {
      this.currentValue = currentValue;
      this.currentCtx = currentCtx;
      // We update `shownAt` on the next tick in order to ensure that
      // when v-if renders the slot the ctx is up-to-date.
      this.$nextTick(() => {
        if (this.shownAt < epoch) {
          this.shownAt = epoch;
        }
      });
    },
    hide(epoch) {
      this.hiddenAt = epoch;
    },
  },
};
</script>
