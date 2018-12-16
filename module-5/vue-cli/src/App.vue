<template>
  <app-servers>Server Status: {{ status }}</app-servers>
</template>

<script>
  export default {
    data: function() {
      return {
        status: 'Critical'
      }
    }
  }
</script>

<style>

</style>
