<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <div>
                  <p>{{ initialText | reverseChars }}</p>
                </div>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

                <div>
                  <p>{{ initialText | append-count }}</p>
                </div>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <div>
                  <p>Initial text: {{ initialText }}</p>
                  <p>reverseText: {{ reverseText }}</p>
                  <p>appendTextLength: {{ appendTextLength }}</p>
                </div>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { appendTextLengthMixin } from './appendTextLengthMixin';

    export default {
      mixins: [appendTextLengthMixin],
      data() {
        return {
          initialText: "Random text"
        }
      },
      filters: {
        reverseChars: function(value) {
          return value.split('').reverse().join('');
        }
      },
      computed: {
        reverseText: function() {
          return this.initialText.split('').reverse().join('');
        }
      }
    }
</script>

<style>
</style>
