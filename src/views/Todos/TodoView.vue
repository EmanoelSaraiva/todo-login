<template>
  <div class="frameTodos">
    <div class="card">
      <p>{{ todos.content }} - {{ todos.finished }}</p>
      <button class="buttonFinish">
        <img src="../../../public/icons/check.svg" width="30px" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todos: Object,
  },
  methods: {
    createTodo() {
      this.$store.commit("addTodo", this.todos);
    },
  },
};
</script>

<style scoped>
.card {
  color: #fff;
  min-width: 200px;
  min-height: 100px;
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
  width: 100vw;
  display: flex;
}
.buttonFinish {
  border: none;
  outline: none;
  background: none;

  cursor: pointer;
}

.buttonFinish img {
  filter: invert(55%) sepia(99%) saturate(546%) hue-rotate(82deg)
    brightness(95%) contrast(89%);
}
</style>
