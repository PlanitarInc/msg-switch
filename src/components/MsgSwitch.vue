<template>
  <span class="msg-switch">
    <!-- list of overridings and dynamic messages -->
    <slot :value="value" />
  </span>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
  },

  data() {
    return { cases: {} };
  },

  provide() {
    return {
      registerMsgCase: this.registerMsgCase,
    };
  },

  watch: {
    value() {
      this.updateDisplayedCase();
    },
  },

  methods: {
    registerMsgCase(matchingValue, child) {
      // First matching case is displayed.
      this.cases[matchingValue] = this.cases[matchingValue] || child;
      this.updateDisplayedCase();
    },

    updateDisplayedCase() {
      const oldCase = this.displayedCase;
      const newCase = this.cases[this.value] || this.cases['*'];

      if (oldCase === newCase) {
        if (oldCase) {
          oldCase.show(this.value);
        }
        return;
      }

      this.displayedCase = newCase;
      if (oldCase) {
        oldCase.hide();
      }
      if (newCase) {
        newCase.show(this.value);
      }
    },
  },
};
</script>
