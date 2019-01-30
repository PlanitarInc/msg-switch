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
    return { cases: {}, epoch: 0 };
  },

  provide() {
    return {
      registerMsgCase: this.registerMsgCase,
    };
  },

  watch: {
    value() {
      this.updateDisplayedCase(true);
    },
  },

  methods: {
    registerMsgCase(matchingValue, caseComponent) {
      // First matching case is displayed.
      if (this.cases[matchingValue]) {
        return;
      }

      this.cases[matchingValue] = caseComponent;
      this.updateDisplayedCase(false);
    },

    updateDisplayedCase(forceUpdate) {
      const oldCase = this.displayedCase;
      const newCase = this.cases[this.value] || this.cases['*'];

      this.epoch++;
      if (oldCase === newCase) {
        if (forceUpdate && oldCase) {
          oldCase.show(this.epoch, this.value);
        }
        return;
      }

      this.displayedCase = newCase;
      if (oldCase) {
        oldCase.hide(this.epoch);
      }
      if (newCase) {
        newCase.show(this.epoch, this.value);
      }
    },
  },
};
</script>
