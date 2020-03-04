<template>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <Layout name="Todo List">
    <div class="row mt-5">
      <div class="col-md-10 offset-md-1 mt-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h2 class="text-white">Tasks</h2>

          <div>
            <div class="search-form">
                <input type="search" class="form-control" placeholder="Search Tasks" v-model="search">
                <button class="btn bg-white" type="button" disabled><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
            </div>
          </div>
        </div>
        <div class="card shadow">
            <div class="card-header bg-white">
              <!-- Nav -->
              <div class="task-list-nav d-flex justify-content-between">
                <nav class="nav">
                  <a href="#" class="nav-link pr-2" :class="!action ? 'active' : ''" data-toggle="tab" @click.prevent="action = false">To do</a>
                  <a href="#" class="nav-link pr-2" :class="action ? 'active' : ''" data-toggle="tab" @click.prevent="action = true">Completed</a>
                  <!-- <a href="#contactInformation" class="nav-link active pr-2" data-toggle="tab">All</a> -->
                </nav>

                <span class="btn btn-sm btn-info" @click="handleAddTask()">New Task</span>
              </div>
            </div>
            <div class="card-body p-0 pt-2">
              <perfect-scrollbar>
                <ul class="list-unstyled list-separated task-list" v-if="selectedTasks.length !== 0">
										<li class="list-separated-item" v-for="(task, key) in selectedTasks" :key="key">
                      <TaskListCard :task="task" :id="task.id" tabindex="0" @view="handleViewTask($event)" />
										</li>
                </ul>
                <NoData v-else>
                  <p>No Data</p>
                </NoData>
              </perfect-scrollbar>
            </div>
        </div>
      </div>

      <Modal :active="form" v-if="form" @close="form = $event">
        <div class="card border-0">
          <div class="card-header bg-info text-white">
            <h5 class="text-white">Hello World</h5>
          </div>
          <div class="card-body">
            <TaskForm :task="task" @close="form = $event" />
          </div>
        </div>
      </Modal>
    </div>
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@/Layouts/Index'
import TaskListCard from '@/components/TaskListCard'
import TaskForm from '@/components/TaskForm'
import Modal from '@/Shared/Modal'
import NoData from '@/Shared/NoData'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Layout, TaskListCard, TaskForm, Modal, NoData
  },
  data(){
    return{
      action: false,
      search: '',
      form: false,
      task: {},
    }
  },

  computed:{
    ...mapGetters({
      tasks: 'getTasks'
    }),

    selectedTasks(){
      if(this.search) return this.tasks.filter(n => {
          return n.title.toLowerCase().includes(this.search.toLowerCase())
      });

      return this.tasks.filter(n => n.completed === this.action);
    }
  },

  methods:{
    handleAddTask(){
      this.form = true;
      this.task = {
        title: null,
        description: null,
        due_date: null,
        assigned_to: null,
        priority: null,
        completed: false
      }
    },

    handleViewTask(task){
        this.form = true;
        this.task = JSON.parse(JSON.stringify(task))
    }
  }
}
</script>


<style scoped>
.task-list li:nth-child(even) {
  background: #f7f6fb
}
.search-form {
    display: flex;
    align-items: stretch;
}
.search-form button {
    display: flex;
    align-items: center;
    padding: 0 .5rem;
    border: 1px solid #c0ccda;
    border-left-width: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: #8392a5;
}
.search-form .form-control {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
}
</style>
