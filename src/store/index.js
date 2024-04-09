import { createStore } from "vuex";

export default createStore({
  state: {
    user: [
      {
        email: "adm",
        password: "adm123",
      },
    ],
    todoList: [
      { id: 1, content: "Hello World", finished: true },
      { id: 2, content: "Estudar Vuetify", finished: false },
    ],
  },
  getters: {},
  mutations: {
    storeUser(state, data) {
      state.user.push(data);
    },

    addTodo(state, data) {
      state.todoList.push(data);
    },
  },
  actions: {},
  modules: {},
});
