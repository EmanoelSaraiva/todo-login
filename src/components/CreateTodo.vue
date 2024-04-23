<template>
  <div>
    <h1>Cadastrar Todo</h1>
    <form @submit.prevent="onSubmit()">
      <label style="color: white">Tarefa:</label>
      <input type="text" v-model="todo.content" />
      <button type="submit">Nova tarefa</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo: {
        content: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const verifCont = this.todo.content;
      if (verifCont.trim()) {
        this.$store.commit("addTodo", this.todo.content);
        this.todo.content = "";
      } else {
        alert("Nessessario enviar nome da tarefa");
      }
    },
  },
};
</script>

<style scoped>
div {
  top: 0;
  position: relative;
}

h1 {
  color: white;
}

input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #6d30a7;
  color: white;
}
</style>
