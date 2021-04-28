<template>
    <form class="container__form">
      <label for="task">Task</label>
      <div class="container__input">
        <input type="string" key="input-task" title="task" id="task" />
        <button type="submit">Ok</button>
      </div>
    </form>
</template>

<script>
export default {
  name: 'Form',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container__form {
  display: flex;
  flex-flow: column;
  max-width: 25rem;
  width: 100%;
}

.container__form label {
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0 0 .3rem 0;
}

.container__input {
  display: flex;
}

.container__input input, button {
  border: none;
  border-radius: 0;
  border-radius: 0;
  outline: 0;
}

.container__input input {
  background: #f1f1f1;
  padding: 1rem;
  font-size: 1rem;
  width: 80%
}

.container__input button {
  background: rgb(20, 200, 90);
  color: #FFF;
  font-weight: 900;
  font-size: 0.8rem;
  width: calc(20% * 1rem);
  padding: 1rem;
  cursor: pointer;
  transition: background .35s ease;
}

.container__input button:hover {
  background: rgb(52, 232, 121);
}
</style>
