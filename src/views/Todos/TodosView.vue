<template>
  <div>
    <TodoView
      v-for="todos in $store.state.todoList"
      :key="todos.id"
      :todos="todos"
    />
  </div>
</template>
<script>
import TodoView from "./TodoView";
export default {
  components: { TodoView },
};
</script>
