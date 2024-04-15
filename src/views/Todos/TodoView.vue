<template>
  <div class="frameTodos">
    <div class="card">
      <p>{{ todos.content }}</p>
      <div class="frameButton">
        <button
          class="buttonFinish"
          @click="finishedTodo"
          v-if="todos.finished === false"
        >
          <img src="../../../public/icons/check.svg" width="30px" />
        </button>
        <button
          class="buttonUnfinished"
          @click="unfinishedTodo"
          v-if="todos.finished === true"
        >
          <img src="../../../public/icons/remove.svg" width="30px" />
        </button>
        <button class="buttonDelete" @click="deleteTodo">
          <img src="../../../public/icons/trash.svg" width="30px" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todos: Object,
  },
  methods: {
    finishedTodo() {
      this.$store.commit("finishedTodo", this.todos);
    },

    unfinishedTodo() {
      this.$store.commit("unfinishedTodo", this.todos);
    },
    deleteTodo() {
      this.$store.commit("deleteTodo", this.todos);
    },
  },
};
</script>

<style scoped>
.card {
  color: #fff;
  min-width: 200px;
  max-height: 300px;
  padding: 0 25px 0 25px;
  margin: 2%;
  background-color: #6d30a7;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.frameTodos {
  height: 100%;
  width: 100%;
  display: flex;
}
.frameButton {
  gap: 10px;
  display: flex;
}

.buttonUnfinished {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}

.buttonFinish {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}

.buttonDelete {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}
</style>
