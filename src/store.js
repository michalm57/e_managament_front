import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  getters: {
    user: (state) => {
      return state.user;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
  },
});

export default store;
