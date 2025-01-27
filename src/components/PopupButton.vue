<template>
  <button @click="emitShowMessage">Povijesna zanimljivost</button>
</template>

<script>
export default {
  name: 'PopupButton',
  emits: ['show-message'],
  methods: {
    emitShowMessage() {
      this.$emit('show-message');
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  background-color: #42b983;
  border: none;
  cursor: pointer;
}
</style>