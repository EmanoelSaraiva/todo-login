import { createStore } from "vuex";

export default createStore({
  state: {
    response: {
      status: {
        success: 200,
        error: 400,
      },
    },
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
  getters: {
    isLoggedIn(state) {
      return state.user !== null;
    },
    returnIdTodo(state) {
      console.log("entrous");
      return Math.max(...state.todoList.map((todo) => todo.id));
    },
  },
  mutations: {
    storeUser(state, data) {
      state.user.push(data);
    },
    addTodo(state, content) {
      const newId = state.todoList.length + 1;
      console.log(newId)

      state.todoList.push({ id: newId, content, finished: false });
    },

    finishedTodo(state, data) {
      const index = state.todoList.find((index) => index.id === data.id);

      index.finished = true;
    },

    unfinishedTodo(state, data) {
      const index = state.todoList.find((index) => index.id === data.id);
      index.finished = false;
    },

    deleteTodo(state, data) {
      const index = state.todoList.findIndex((todo) => todo.id === data.id);
      if (index !== -1) {
        state.todoList.splice(index, 1);
      }
    },
  },
  actions: {
    login(context, credentials) {
      const { email, password } = credentials;

      const valCredE = context.state.user.find(
        (index) => index.email === email
      );
      const valCredP = context.state.user.find(
        (index) => index.password === password
      );

      if (valCredE && valCredP) {
        context.commit("storeUser", { email, password });
        return context.state.response.status.success;
      } else {
        console.error("Invalid login");
        return context.state.response.status.error;
      }
    },
  },
  modules: {},
});
