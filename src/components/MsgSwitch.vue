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
        return;
      }

      this.displayedCase = newCase;
      if (oldCase) {
        oldCase.$el.classList.remove('match');
      }
      if (newCase) {
        newCase.$el.classList.add('match');
        newCase.updateCode(this.value);
      }
    },
  },
};
</script>

<style>
.msg-switch .msg-case {
  display: none;
}

.msg-switch .msg-case.match {
  display: inherit;
}
</style>
