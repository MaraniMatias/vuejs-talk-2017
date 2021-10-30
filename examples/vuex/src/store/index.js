import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    length: 0,
    todo: [],
  },
  getters: {
    newProperty(state) {
      console.log('newProperty');
      return state.newProperty || '';
    },
    newProperty2(state) {
      console.log('newProperty2');
      return state.newProperty2 || '';
    },
    length: (state) => {
      console.log('length');
      return state.length;
    },
    todo: (state) => {
      console.log('todo');
      return state.todo;
    },
    getBy: (state) => (id) => {
      console.log('getters', id);
      return state.todo.indexOf(id);
    },
  },
  mutations: {
    add(state) {
      state.todo.push(state.todo.length);
    },
    sun(state) {
      state.length += 1;
    },
    set(state) {
      state.newProperty = state.length;
      Vue.set(state, 'newProperty1', state.length);
    },
  },
  actions: {
    add({ commit, state }) {
      commit('add');

      if (state.length < 4) commit('sun');
    },
  },
  modules: {},
});
