<template>
  <Layout />
</template>

<script>
import Layout from "./components/Layout";

export default {
  name: "App",
  components: {
    Layout
  }
};
</script>

<style>
*::after, *::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  background: #fdfdfd;
}
</style>
