export const appendTextLengthMixin = {
  computed: {
    appendTextLength: function() {
      return `${this.initialText} (${this.initialText.length})`;
    }
  }
}
