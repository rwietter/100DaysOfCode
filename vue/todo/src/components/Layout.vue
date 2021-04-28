<template>
  <div class="layout">
    <Todo />
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  name: 'Layout',
  props: {},
  components: {
    Todo
  }
}
</script>

<style>
.layout {
  width: 100%;
  height: 100%;
}
</style>