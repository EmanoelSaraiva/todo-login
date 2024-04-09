import { createStore } from "vuex";

export default createStore({
  state: {
    user: [
      {
        email: "adm",
        password: "adm123",
      },
    ],
    todoList: [],
  },
  getters: {},
  mutations: {
    storeUser(state, data) {
      state.user.push(data);
      console.log(state.user);
    },
  },
  actions: {},
  modules: {},
});
