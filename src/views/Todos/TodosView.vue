<template>
  <CreateTodo />
  <RouterLink to="/" v-if="!$store.getters.isLoggedIn" />
  <div class="todosListeds">
    <div class="finished">
      <h2>Finalizadas</h2>
      <TodoView v-for="todos in finishedTodo" :key="todos.id" :todos="todos" />
    </div>
    <div class="unfinished">
      <h2>A fazer</h2>
      <TodoView
        v-for="todos in unFinishedTodo"
        :key="todos.id"
        :todos="todos"
      />
    </div>
  </div>
</template>
<script>
import TodoView from "./TodoView";
import CreateTodo from "@/components/CreateTodo.vue";
export default {
  components: { TodoView, CreateTodo },
  computed: {
    finishedTodo() {
      return this.$store.state.todoList.filter((todo) => todo.finished);
    },
    unFinishedTodo() {
      return this.$store.state.todoList.filter((todo) => !todo.finished);
    },
  },
};
</script>

<style scoped>
.todosListeds {
  display: flex;
  height: auto;
  justify-content: space-evenly;
}

.todosListeds h2 {
  color: white;
}
</style>
