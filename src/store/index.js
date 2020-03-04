import Vue from 'vue'
import Vuex from 'vuex'
import Task from './Modules/task'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    task: Task,
  },
  // strict: true
})

export default store;
