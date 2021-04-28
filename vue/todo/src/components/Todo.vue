
<template class="container">
  <section class="container__todo">
    <h1>Todo</h1>
    <Form />
    <section class="container__tasks" id="task-list">
      <section class="container__task">
        <div v-for="(task, index) of state.tasks"
        :key="index" class="container__task__title">
          <button type="button" class="container__task--add">{{ index }}</button>
          <p>{{task.description}}</p>
        </div>
        <button type="button" class="container__task--delete">X</button>
      </section>
    </section>
  </section>
</template>

<script>
import Form from './Form'
import state from '../global'

export default {
  name: 'Todo',
  components: {
    Form
  },
  mounted() {
    state
  },
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.container__todo {
  height: 100%;
  width: 70%;
  min-height: 50vh;
  background: #FFF;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
}

.container__tasks {
  height: 100%;
  padding: 1rem;
  max-width: 25rem;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column nowrap;
}

.container__task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 24rem;
  width: 100%;
  background: lavender;
  padding: .5rem;
}

.container__task__title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.container__task button {
  border: none;
  border-radius: 0;
  border-radius: 0;
  outline: 0;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  
}

.container__task__title button {
  margin-right: 1rem;
}

.container__task__title p {
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.container__task--add {
  background: rgb(75, 208, 135);
  color: #FFF;
  transition: background .35s ease;
}

.container__task--add:hover {
 background: rgb(115, 226, 160);
}

.container__task--delete {
 background: rgb(250, 39, 39);
 color: #FFF;
 transition: background .35s ease;
}
.container__task--delete:hover {
 background: rgb(233, 67, 67);
}
</style>
